import useEditorStore from '../store/store'
import { getEditorsValue } from '../lib/localstorage.js'


const Iframe = () => {

  const editorsValue = getEditorsValue()
  
  const value = useEditorStore(state => ({
    html: state.htmlCode,
    css: state.cssCode,
    js: state.jsCode
  }))
  
  const iframeCode = `
    <!doctype html>
    <html lang="es">
      <head>
        <style>
          ${editorsValue['css'] || value.css}
        </style>
      </head>
      <body>
        ${editorsValue['html'] || value.html}
        <script>
          ${editorsValue['js'] || value.js}
        </script>
      </body>
    </html>
  `
  return (
    <iframe srcDoc={iframeCode}>
    </iframe>
  )
}

export default Iframe
