import useEditorStore from '../store/store'

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/worker-javascript";

import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

const JsEditor = () => {
  const { updateJsCode } = useEditorStore()

  const handleChange = (code) => {
    updateJsCode(code)
  }
  return (
    <AceEditor
      placeholder='Javascript code here...'
      mode='javascript'
      theme="monokai"
      className="editor"
      width="100%"
      // height="100%"
      height='calc(100% - 35px)'
      onChange={handleChange}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        fontSize: 16,
        showPrintMargin: false,
        // wrapEnabled: true,
        tabSize: 2,
        useWorker: false
      }}
    />
  )
}

export default JsEditor
