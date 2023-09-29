import './ModalConfig.css'
import useEditorStore from '../store/store'

const ModalConfig = () => {
  const modalOpen = useEditorStore(state => state.modalOpen)
  const { closeModal, updateFontSize } = useEditorStore()
  const fontSizeValue = useEditorStore(state => state.fontSize)
  return (
    <>
    { modalOpen && (
      <div className="modal">
        <div className="modal-content" >
          <h1>Editor config.</h1>
          <button className="close-btn" onClick={closeModal}>cerrar</button>
          <span>Font size {fontSizeValue} </span>
          <input type="number" value={fontSizeValue} onChange={(e) => updateFontSize(e.target.value)} />
        </div>
      </div>
    )}
    </>
  )
}

export default ModalConfig
