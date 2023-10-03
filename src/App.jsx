import { useState, useEffect } from 'react'
import './App.css'
import useEditorStore from './store/store.js'

import Split from 'react-split'

import EditorsContainer from './components/EditorsContainer.jsx'
import Iframe from './components/Iframe.jsx'
import ModalConfig from './components/ModalConfig.jsx'


function App() {
  return (
    <div className="container">
      <ModalConfig />
      <Split
          className="split"
          direction="vertical"
          minSize={40}
          snapOffset={0}
      >
            <EditorsContainer/>
            <Iframe/>
      </Split>
    </div>
  )
}

export default App
