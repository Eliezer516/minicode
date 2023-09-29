import { useState, useEffect } from 'react'

import './ModalConfig.css'
import useEditorStore from '../store/store'
import themes from 'ace-builds/src-noconflict/ext-themelist'

const ModalConfig = () => {
  const [themelist, setThemeList] = useState([])
  const modalOpen = useEditorStore(state => state.modalOpen)
  const { closeModal, updateFontSize, updateEditorTheme } = useEditorStore()
  const fontSizeValue = useEditorStore(state => state.fontSize)

  useEffect(() => {
    setThemeList(themes.themes)
    console.log(themelist)
  }, [])
  return (
    <>
    { modalOpen && (
      <div className="modal">
        <div className="modal-content" >
          <h1>Editor config.</h1>
          <button className="close-btn" onClick={closeModal}><i className='bx bx-x'></i></button>
          <span>Font size {fontSizeValue} </span>
          <input type="number" value={fontSizeValue} onChange={(e) => updateFontSize(e.target.value)} />
          <span>Theme </span>
          <select onChange={(e) => updateEditorTheme(e.target.value)}>
            {themelist.map((item, index) => (
              <option key={index} value={item.name}>{item.caption}</option>
            ))}
          </select>
        </div>
      </div>
    )}
    </>
  )
}

export default ModalConfig
