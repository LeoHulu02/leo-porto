import { ref } from 'vue'
import { DOCUMENTS } from '../constants/documents.js'

const activeDocument = ref(null)

export function usePdfPreview() {
  const openPdfPreview = (documentId) => {
    activeDocument.value = DOCUMENTS[documentId] ?? null
  }

  const closePdfPreview = () => {
    activeDocument.value = null
  }

  return {
    activeDocument,
    openPdfPreview,
    closePdfPreview,
  }
}
