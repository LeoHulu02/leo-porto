import cvPdfUrl from '../public/CV - Leo Saputra Hulu.pdf?url'
import certificatePdfUrl from '../public/FULL STACK DEVELOPER - Leo Saputra Hulu - E-certificate Harisenin Bootcamp Full Stack Developer Batch 18.pdf?url'

export const DOCUMENTS = {
  cv: {
    id: 'cv',
    title: 'Curriculum Vitae',
    subtitle: 'Leo Saputra Hulu — Full Stack Developer',
    url: cvPdfUrl,
    filename: 'CV - Leo Saputra Hulu.pdf',
    description: 'Ringkasan pengalaman, keahlian, dan pendidikan.',
  },
  certificate: {
    id: 'certificate',
    title: 'Sertifikat Bootcamp',
    subtitle: 'Harisenin — Full Stack Developer Batch 18',
    url: certificatePdfUrl,
    filename:
      'FULL STACK DEVELOPER - Leo Saputra Hulu - E-certificate Harisenin Bootcamp Full Stack Developer Batch 18.pdf',
    description: 'E-certificate resmi program Full Stack Developer.',
  },
}
