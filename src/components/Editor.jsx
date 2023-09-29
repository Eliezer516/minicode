import { useRef, useEffect } from 'react'

import AceEditor from "react-ace";

import useEditorStore from '../store/store'

import 'ace-builds/src-min-noconflict/ext-searchbox';

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-noconflict/worker-html";

import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/snippets/css";
import "ace-builds/src-noconflict/worker-css";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/snippets/javascript";
// import "ace-builds/src-noconflict/worker-javascript";

import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
// import "ace-builds/src-noconflict/ext-emmet";

const Editor = () => {
  const editorMode = useEditorStore((state) => state.editorMode)
  const placeholder = useEditorStore(state => state.placeholder)
  const value = useEditorStore(state => state.value)
  
  const { updateHtmlCode, updateCssCode, updateJsCode } = useEditorStore()


  const store = useEditorStore()
  
  function onChange(code) {
    if(editorMode === 'html')  updateHtmlCode(code)

    if(editorMode === 'css') updateCssCode(code)

    if(editorMode === 'javascript') updateJsCode(code)

    // console.log(value)
  }

  return (
    <AceEditor
      placeholder={placeholder}
      mode={editorMode}
      value={value}
      theme="monokai"
      name="mi-editor"
      width="100%"
      height="100vh"
      onChange={onChange}
      editorProps={{
        $blockScrolling: true
      }}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        fontSize: 16,
        showPrintMargin: false,
        wrapEnabled: true,
        tabSize: 2,
        useWorker: false
      }}
    />
  )
}

export default Editor
