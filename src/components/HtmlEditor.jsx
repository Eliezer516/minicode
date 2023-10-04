import useEditorStore from '../store/store'

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-noconflict/worker-html";

import '../themes/themes'
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-emmet";

import { getEditorsValue, updateEditorsValue } from '../lib/localstorage.js'

const HtmlEditor = () => {
  
  const { updateHtmlCode } = useEditorStore()
  const fontSizeValue = useEditorStore(state => state.fontSize)
  const editorThemeValue = useEditorStore(state => state.editorTheme)

  const editorValue = getEditorsValue()

  const handleChange = (code) => {
    updateHtmlCode(code)
    updateEditorsValue('html', code)
  }
  
  return (
    <AceEditor
      placeholder='Html code here...'
      mode='html'
      theme={editorThemeValue}
      className="editor"
      onChange={handleChange}
      width='100%'
      height='100%'
      value={editorValue['html'] || ''}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        fontSize: 16,
        showPrintMargin: false,
        // wrapEnabled: true,
        tabSize: 2,
        useWorker: false,
        enableEmmet: true
      }}
    />
  )
}

export default HtmlEditor
