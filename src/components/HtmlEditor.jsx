import useEditorStore from '../store/store'

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-noconflict/worker-html";

import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

const HtmlEditor = () => {
  
  const { updateHtmlCode } = useEditorStore()
  const editorHeight = useEditorStore(state => state.editorHeight)
  const fontSizeValue = useEditorStore(state => state.fontSize)

  const handleChange = (code) => {
    updateHtmlCode(code)
  }
  
  return (
    <AceEditor
      placeholder='Html code here...'
      mode='html'
      theme="monokai"
      className="editor"
      onChange={handleChange}
      width='100%'
      // height={Math.round(editorHeight[0]) + '%'}
      height='calc(100% - 35px)'
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        fontSize: 18,
        showPrintMargin: false,
        // wrapEnabled: true,
        tabSize: 2,
        useWorker: false
      }}
    />
  )
}

export default HtmlEditor
