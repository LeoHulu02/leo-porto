/**
 * EmailJS config & validation for Vite (env baked in at build time on Vercel).
 */
export function getEmailJsConfig() {
  return {
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim() ?? '',
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim() ?? '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim() ?? '',
  }
}

export function validateEmailJsConfig({ publicKey, serviceId, templateId }) {
  const errors = []

  if (!publicKey) {
    errors.push('VITE_EMAILJS_PUBLIC_KEY belum diisi.')
  }

  if (!serviceId) {
    errors.push('VITE_EMAILJS_SERVICE_ID belum diisi.')
  } else if (!serviceId.startsWith('service_')) {
    errors.push(
      'VITE_EMAILJS_SERVICE_ID harus format service_xxxxx dari Email Services — bukan Public Key.'
    )
  }

  if (!templateId) {
    errors.push('VITE_EMAILJS_TEMPLATE_ID belum diisi.')
  } else if (!templateId.startsWith('template_')) {
    errors.push('VITE_EMAILJS_TEMPLATE_ID harus format template_xxxxx dari Email Templates.')
  }

  if (publicKey && serviceId && publicKey === serviceId) {
    errors.push('SERVICE_ID dan PUBLIC_KEY tidak boleh sama.')
  }

  return errors
}

/** Covers common EmailJS template variable names */
export function buildEmailTemplateParams(form) {
  const subject = `[Portfolio] ${form.subject}`

  return {
    from_name: form.name,
    from_email: form.email,
    name: form.name,
    user_name: form.name,
    email: form.email,
    user_email: form.email,
    reply_to: form.email,
    subject,
    title: subject,
    message: form.message,
  }
}

export function getEmailJsErrorMessage(error) {
  const text = `${error?.text ?? ''} ${error?.message ?? ''}`.toLowerCase()

  if (error?.status === 412 || text.includes('invalid grant') || text.includes('insufficient authentication scopes')) {
    return 'EmailJS menolak pengiriman karena koneksi email service perlu dihubungkan ulang. Buka EmailJS → Email Services → pilih service → Disconnect lalu Connect lagi, dan izinkan akses kirim email.'
  }

  if (text.includes('service id') || text.includes('service_id')) {
    return 'Service ID tidak valid. Di Vercel, set VITE_EMAILJS_SERVICE_ID ke ID yang diawali service_ (bukan Public Key), lalu redeploy.'
  }

  if (text.includes('template') || text.includes('template_id')) {
    return 'Template ID tidak valid. Pastikan VITE_EMAILJS_TEMPLATE_ID = template_xxxxx dari dashboard EmailJS.'
  }

  if (text.includes('user_id') || text.includes('public key') || text.includes('public_key')) {
    return 'Public Key tidak valid. Cek VITE_EMAILJS_PUBLIC_KEY di Vercel, lalu redeploy.'
  }

  if (text.includes('origin') || text.includes('domain')) {
    return 'Domain belum diizinkan di EmailJS. Tambahkan leo-hulu.vercel.app di Account → Security → Allowed origins.'
  }

  return 'Gagal mengirim pesan. Cek konfigurasi EmailJS di Vercel atau hubungi via WhatsApp.'
}
