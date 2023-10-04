import { useState, useEffect } from 'react'
import './App.css'
import 'picnic/picnic.min.css'
import useEditorStore from './store/store.js'

import Split from 'react-split'

import EditorsContainer from './components/EditorsContainer.jsx'
import Iframe from './components/Iframe.jsx'
import ModalConfig from './components/ModalConfig.jsx'


function App() {
  return (
    <div className="container">
      <Split
          className="split"
          direction="vertical"
          minSize={40}
          snapOffset={0}
      >
            <EditorsContainer/>
            <Iframe/>
      </Split>
      <ModalConfig />
    </div>
  )
}

export default App
