<template>
  <section
    id="connect"
    class="relative w-full overflow-hidden border-b border-violet-500/10 bg-[#050508] py-16 text-white sm:py-20 md:py-24 lg:py-28"
  >
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-violet-600/10 blur-3xl" />
      <div class="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-fuchsia-500/5 blur-3xl" />
      <div
        class="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
      />
    </div>

    <div class="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-10 space-y-4 text-center md:mb-12" data-reveal>
        <p class="text-[10px] font-semibold uppercase tracking-[0.3em] text-violet-400 font-techno sm:text-xs">
          03 · KONTAK
        </p>
        <h2 class="text-3xl font-black leading-tight tracking-tight font-techno sm:text-4xl md:text-5xl">
          Mari Bangun
          <span
            class="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-300 bg-clip-text text-transparent"
          >
            Solusi Digital
          </span>
          Bersama
        </h2>
        <p class="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-400 font-sans sm:text-base">
          Punya ide proyek, butuh developer, atau ingin diskusi teknis? Kirim pesan lewat form di bawah
          atau hubungi langsung — saya akan membalas secepat mungkin.
        </p>
      </div>

      <div class="grid gap-8 lg:grid-cols-5 lg:gap-10">
        <!-- Left: Contact channels -->
        <div class="space-y-5 lg:col-span-2" data-reveal data-reveal-delay="50">
          <div
            class="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-5 sm:p-6"
          >
            <div class="mb-4 flex items-center justify-between gap-3">
              <span
                class="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300 font-techno"
              >
                <span class="relative flex h-2 w-2">
                  <span
                    class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"
                  />
                  <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Tersedia
              </span>
              <span class="text-[10px] text-zinc-500 font-sans">Respon ±24 jam</span>
            </div>

            <h3 class="mb-2 text-lg font-bold text-white font-techno">Prioritas Respons Cepat</h3>
            <p class="mb-5 text-sm leading-relaxed text-zinc-400 font-sans">
              Untuk kebutuhan mendesak atau briefing singkat, WhatsApp adalah kanal tercepat.
            </p>

            <a
              href="https://wa.me/6281264351062"
              target="_blank"
              rel="noopener noreferrer"
              class="whatsapp-pulse inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-emerald-500/90 px-5 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-400 active:scale-[0.98] font-techno touch-manipulation"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"
                />
              </svg>
              Chat via WhatsApp
            </a>
          </div>

          <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <a
              v-for="channel in contactChannels"
              :key="channel.label"
              :href="channel.href"
              :target="channel.external ? '_blank' : undefined"
              :rel="channel.external ? 'noopener noreferrer' : undefined"
              class="group flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.02] p-4 transition-all hover:border-violet-500/25 hover:bg-violet-500/[0.04] active:scale-[0.99] touch-manipulation"
            >
              <span
                class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-300 transition-colors group-hover:border-violet-500/30 group-hover:text-violet-300"
              >
                <component :is="channel.icon" class="h-5 w-5" />
              </span>
              <span class="min-w-0">
                <span class="block text-[10px] font-bold uppercase tracking-wider text-zinc-500 font-techno">
                  {{ channel.label }}
                </span>
                <span class="mt-0.5 block truncate text-sm font-medium text-zinc-200 font-sans">
                  {{ channel.value }}
                </span>
              </span>
            </a>
          </div>

          <div class="rounded-2xl border border-white/8 bg-white/[0.02] p-5">
            <p class="mb-3 text-[10px] font-bold uppercase tracking-wider text-zinc-500 font-techno">
              Sosial Media
            </p>
            <div class="flex flex-wrap gap-2">
              <a
                v-for="social in socialLinks"
                :key="social.label"
                :href="social.href"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="social.label"
                class="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-semibold text-zinc-300 transition-all hover:border-violet-500/30 hover:text-white active:scale-95 font-techno touch-manipulation"
              >
                <component :is="social.icon" class="h-4 w-4" />
                {{ social.label }}
              </a>
            </div>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="lg:col-span-3" data-reveal data-reveal-delay="100">
          <div
            class="overflow-hidden rounded-2xl border border-white/10 bg-[#08080c]/80 shadow-2xl shadow-violet-500/5 backdrop-blur-sm"
          >
            <div class="border-b border-white/10 px-5 py-4 sm:px-6 sm:py-5">
              <h3 class="text-lg font-bold text-white font-techno sm:text-xl">Kirim Pesan</h3>
              <p class="mt-1 text-xs text-zinc-400 font-sans sm:text-sm">
                Isi form berikut — pesan akan langsung masuk ke inbox saya.
              </p>
            </div>

            <form class="space-y-4 p-5 sm:p-6" @submit.prevent="handleSubmit" novalidate>
              <div
                v-if="!isEmailJsConfigured"
                class="rounded-xl border border-amber-500/25 bg-amber-500/10 px-4 py-3 text-xs leading-relaxed text-amber-100/90 font-sans sm:text-sm"
                role="status"
              >
                Form belum aktif — tambahkan kredensial EmailJS di file <code class="text-amber-200">.env</code>.
                Sementara itu, gunakan WhatsApp di sebelah kiri.
              </div>

              <div class="grid gap-4 sm:grid-cols-2">
                <div class="space-y-1.5">
                  <label for="contact-name" class="block text-xs font-semibold text-zinc-300 font-sans">
                    Nama Lengkap <span class="text-violet-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    v-model.trim="form.name"
                    type="text"
                    name="name"
                    autocomplete="name"
                    required
                    maxlength="80"
                    placeholder="Contoh: Budi Santoso"
                    class="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-zinc-600 transition-colors focus:border-violet-500/50 focus:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-violet-500/20 font-sans"
                  />
                </div>

                <div class="space-y-1.5">
                  <label for="contact-email" class="block text-xs font-semibold text-zinc-300 font-sans">
                    Email <span class="text-violet-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    v-model.trim="form.email"
                    type="email"
                    name="email"
                    autocomplete="email"
                    required
                    maxlength="120"
                    placeholder="nama@email.com"
                    class="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-zinc-600 transition-colors focus:border-violet-500/50 focus:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-violet-500/20 font-sans"
                  />
                </div>
              </div>

              <div class="space-y-1.5">
                <label for="contact-subject" class="block text-xs font-semibold text-zinc-300 font-sans">
                  Topik <span class="text-violet-400">*</span>
                </label>
                <select
                  id="contact-subject"
                  v-model="form.subject"
                  name="subject"
                  required
                  class="w-full appearance-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white transition-colors focus:border-violet-500/50 focus:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-violet-500/20 font-sans"
                >
                  <option value="" disabled class="bg-[#08080c]">Pilih topik percakapan</option>
                  <option v-for="topic in subjectOptions" :key="topic" :value="topic" class="bg-[#08080c]">
                    {{ topic }}
                  </option>
                </select>
              </div>

              <div class="space-y-1.5">
                <label for="contact-message" class="block text-xs font-semibold text-zinc-300 font-sans">
                  Pesan <span class="text-violet-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  v-model.trim="form.message"
                  name="message"
                  required
                  rows="5"
                  maxlength="2000"
                  placeholder="Ceritakan kebutuhan proyek, timeline, atau pertanyaan Anda..."
                  class="min-h-[140px] w-full resize-y rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-relaxed text-white placeholder:text-zinc-600 transition-colors focus:border-violet-500/50 focus:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-violet-500/20 font-sans"
                />
                <p class="text-right text-[10px] text-zinc-600 font-sans">{{ form.message.length }}/2000</p>
              </div>

              <!-- Honeypot -->
              <input
                v-model="form.honeypot"
                type="text"
                name="company"
                tabindex="-1"
                autocomplete="off"
                class="hidden"
                aria-hidden="true"
              />

              <div
                v-if="status.message"
                class="rounded-xl px-4 py-3 text-sm font-sans"
                :class="statusClass"
                role="alert"
                aria-live="polite"
              >
                {{ status.message }}
              </div>

              <button
                type="submit"
                :disabled="isSubmitting || !isEmailJsConfigured"
                class="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border border-violet-500/30 bg-violet-600 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-violet-500/20 transition-all hover:bg-violet-500 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 font-techno touch-manipulation"
              >
                <span
                  v-if="isSubmitting"
                  class="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
                  aria-hidden="true"
                />
                {{ isSubmitting ? 'Mengirim…' : 'Kirim Pesan' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, h, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import emailjs from '@emailjs/browser'
import { siGithub, siInstagram } from 'simple-icons'

const LINKEDIN_ICON_PATH =
  'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.668H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'

const displayEmail = import.meta.env.VITE_CONTACT_EMAIL || 'leosaputrahulu@gmail.com'

const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID

const isEmailJsConfigured = Boolean(emailJsPublicKey && emailJsServiceId && emailJsTemplateId)

const subjectOptions = [
  'Kolaborasi Proyek',
  'Freelance / Kontrak',
  'Lowongan Full-time',
  'Konsultasi Teknis',
  'Lainnya',
]

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
  honeypot: '',
})

const isSubmitting = ref(false)
const status = reactive({
  type: '',
  message: '',
})

const statusClass = computed(() => {
  if (status.type === 'success') {
    return 'border border-emerald-500/25 bg-emerald-500/10 text-emerald-100'
  }
  if (status.type === 'error') {
    return 'border border-red-500/25 bg-red-500/10 text-red-100'
  }
  return ''
})

const iconFromPath = (path) => ({
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': 'true' }, [
      h('path', { d: path }),
    ])
  },
})

const MailIcon = {
  render() {
    return h(
      'svg',
      {
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': '1.75',
        'aria-hidden': 'true',
      },
      [
        h('path', {
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          d: 'M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.81 4.514a2.25 2.25 0 0 1-2.142 0l-7.81-4.514a2.25 2.25 0 0 1-1.07-1.916V6.75',
        }),
      ]
    )
  },
}

const LocationIcon = {
  render() {
    return h(
      'svg',
      {
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': '1.75',
        'aria-hidden': 'true',
      },
      [
        h('path', {
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          d: 'M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
        }),
        h('path', {
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          d: 'M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z',
        }),
      ]
    )
  },
}

const contactChannels = [
  {
    label: 'Email',
    value: displayEmail,
    href: `mailto:${displayEmail}`,
    external: false,
    icon: MailIcon,
  },
  {
    label: 'Lokasi',
    value: 'Indonesia · Remote',
    href: '#connect',
    external: false,
    icon: LocationIcon,
  },
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/LeoHulu02', icon: iconFromPath(siGithub.path) },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/leo-saputra-hulu-9449b0331',
    icon: iconFromPath(LINKEDIN_ICON_PATH),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/leo_hulu/',
    icon: iconFromPath(siInstagram.path),
  },
]

const resetForm = () => {
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
}

const handleSubmit = async () => {
  if (form.honeypot) return
  if (!isEmailJsConfigured || isSubmitting.value) return

  status.type = ''
  status.message = ''

  if (!form.name || !form.email || !form.subject || !form.message) {
    status.type = 'error'
    status.message = 'Mohon lengkapi semua field yang wajib diisi.'
    return
  }

  isSubmitting.value = true

  try {
    await emailjs.send(
      emailJsServiceId,
      emailJsTemplateId,
      {
        from_name: form.name,
        from_email: form.email,
        reply_to: form.email,
        subject: `[Portfolio] ${form.subject}`,
        message: form.message,
      },
      { publicKey: emailJsPublicKey }
    )

    status.type = 'success'
    status.message = 'Pesan terkirim! Terima kasih — saya akan segera membalas via email.'
    resetForm()
  } catch {
    status.type = 'error'
    status.message = 'Gagal mengirim pesan. Coba lagi atau hubungi via WhatsApp.'
  } finally {
    isSubmitting.value = false
  }
}

let observer

onMounted(() => {
  if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return

  const elements = document.querySelectorAll('#connect [data-reveal]')
  if (!elements.length) return

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.05, rootMargin: '40px' }
  )

  elements.forEach((el) => {
    const delay = el.getAttribute('data-reveal-delay')
    if (delay) el.style.transitionDelay = `${delay}ms`
    el.classList.add('reveal-init')
    observer.observe(el)
  })
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<style scoped>
@keyframes whatsapp-pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.45);
  }
  70% {
    transform: scale(1.01);
    box-shadow: 0 0 0 8px rgba(16, 185, 129, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
  }
}

.whatsapp-pulse {
  animation: whatsapp-pulse 2.8s ease-out infinite;
}

.reveal-init {
  opacity: 0;
  transform: translateY(15px);
  transition:
    opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal-visible {
  opacity: 1;
  transform: translateY(0);
}

.touch-manipulation {
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}
</style>
