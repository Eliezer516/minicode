import useEditorStore from '../store/store'

const Iframe = () => {
  
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
          ${value.css}
        </style>
      </head>
      <body>
        <main>
          ${value.html}
        </main>
        <script>
          ${value.js}
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
