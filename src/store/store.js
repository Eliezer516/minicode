import { create } from 'zustand'

const useEditorStore = create((set) => ({
  htmlCode: '',
  cssCode: '',
  jsCode: '',
  updateHtmlCode: (code) => set(state => ({ ...state, htmlCode: state.htmlCode = code })),
  updateCssCode: (code) => set(state => ({ ...state, cssCode: state.cssCode = code })),
  updateJsCode: (code) => set(state => ({ ...state, jsCode: state.jsCode = code })),
  modalOpen: false,
  openModal: () => set(state => ({ ...state, modalOpen: state.modalOpen = true })),
  closeModal: () => set(state => ({ ...state, modalOpen: state.modalOpen = false })),
  fontSize: 16,
  updateFontSize: (size) => set(state => ({ ...state, fontSize: state.fontSize = size})),
  editorTheme: 'monokai',
  updateEditorTheme: (theme) => set(state => ({ ...state, editorTheme: state.editorTheme = theme })),
  clearAllEditors: () => set(state => ({ ...state, htmlCode: '', cssCode: '', jsCode: '' })),
}))

export default useEditorStore
