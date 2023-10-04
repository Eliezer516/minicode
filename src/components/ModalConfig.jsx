import { useState, useEffect } from 'react'

import useEditorStore from '../store/store'
import themes from 'ace-builds/src-noconflict/ext-themelist'

import { getConfig, updateConfig } from '../lib/localstorage.js'

const ModalConfig = () => {
  const { updateFontSize, updateEditorTheme } = useEditorStore()
  const fontSizeValue = useEditorStore(state => state.fontSize)
  const config = getConfig()
  
  async function onChange(e) {
    updateEditorTheme(e.target.value)
    // localStorage.setItem('editorTheme', e.target.value);
    updateConfig('theme', e.target.value)
  }
  return (
      <div className="modal">
        <input id="modal_1" type="checkbox" />
        <label htmlFor="modal_1" className="overlay"></label>
        <article>
          <header>
            <h1>Editor config.</h1>
            <label htmlFor="modal_1" className="close">&times;</label>
          </header>
          <section>
            <input type="number" value={fontSizeValue} onChange={(e) => updateFontSize(e.target.value)} />
            <span>Theme </span>
            <select onChange={onChange} defaultValue={config['theme'] || 'monokai'}>
              {themes.themes.map((item, index) => (
                <option key={index} value={item.name}>{item.caption}</option>
              ))}
            </select>
          </section>
          <footer>
          </footer>
        </article>
      </div>
  )
}

export default ModalConfig

