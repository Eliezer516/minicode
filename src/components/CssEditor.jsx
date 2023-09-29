import useEditorStore from '../store/store'

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/snippets/css";
import "ace-builds/src-noconflict/worker-css";

import '../themes/themes'
import "ace-builds/src-noconflict/ext-language_tools";

const CssEditor = () => {

  const { updateCssCode } = useEditorStore()
  const editorThemeValue = useEditorStore(state => state.editorTheme)
  

  const handleChange = (code) => {
    updateCssCode(code)
  }
  return (
    <AceEditor
      placeholder='Css code here...'
      mode='css'
      theme={editorThemeValue}
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
        tabSize: 2,
        useWorker: false
      }}
    />
  )
}

export default CssEditor
