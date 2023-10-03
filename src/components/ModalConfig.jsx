import { useState, useEffect } from 'react'

import './ModalConfig.css'
import useEditorStore from '../store/store'
import themes from 'ace-builds/src-noconflict/ext-themelist'

import { getConfig, updateConfig } from '../lib/localstorage.js'

const ModalConfig = () => {
  const modalOpen = useEditorStore(state => state.modalOpen)
  const { closeModal, updateFontSize, updateEditorTheme } = useEditorStore()
  const fontSizeValue = useEditorStore(state => state.fontSize)
  const config = getConfig()
  
  async function onChange(e) {
    updateEditorTheme(e.target.value)
    // localStorage.setItem('editorTheme', e.target.value);
    updateConfig('theme', e.target.value)
  }
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
          <select onChange={onChange} defaultValue={config['theme'] || 'monokai'}>
            {themes.themes.map((item, index) => (
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
