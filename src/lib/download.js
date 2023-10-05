import { getEditorsValue } from './localstorage'

const localStorageValues = getEditorsValue()

const downloadCode = () => {
  const template = `
    <!doctype html>
    <html lang="es">
      <head>
        <style>
          ${localStorageValues['css']}
        </style>
      </head>
      <body>
        ${localStorageValues['html']}
        <script>
          ${localStorageValues['js']}
        </script>
      </body>
    </html>
  `
  const a = document.createElement("a");
  const archivo = new Blob([template], { type: 'text/html' });
  const url = URL.createObjectURL(archivo);
  a.href = url;
  a.download = 'code.html';
  a.click();
  URL.revokeObjectURL(url);
}

export default downloadCode
