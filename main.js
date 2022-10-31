import './style.css'

Split(['#editor-container', '#preview'], {
  direction: 'vertical'
})

var editor = ace.edit("editor")
var Emmet = ace.require("ace/ext/emmet")
editor.setOption({
  'enableEmmet': true,
})
editor.setOption('cursorStyle', 'smooth')
editor.setShowPrintMargin(false)
editor.setTheme("ace/theme/chrome")


const htmlSession = ace.createEditSession('')
const cssSession = ace.createEditSession('')
const jsSession = ace.createEditSession('')

editor.setSession(htmlSession)
editor.session.setMode('ace/mode/html')

document.querySelector('#html').onclick = () => {
  editor.setSession(htmlSession)
  editor.session.setMode("ace/mode/html")
}

document.querySelector('#css').onclick = () => {
  editor.setSession(cssSession)
  editor.session.setMode("ace/mode/css")
}

document.querySelector('#js').onclick = () => {
  editor.setSession(jsSession)
  editor.session.setMode("ace/mode/javascript")
}

const updatePreview = () => {
  const htmlForIframe = `<style>${cssSession.getValue()}</style><main>${htmlSession.getValue()}</main><script type="module">${jsSession.getValue()}</script>`
  document.querySelector('iframe').setAttribute('srcdoc', htmlForIframe)
}

editor.on('change', function() {
  setTimeout(() => {
    updatePreview()
  }, 900)
})

document.querySelector('#toggle-darkMode').onclick = () => {
  document.querySelector('#toggle-darkMode').classList.toggle('active')
  if(!document.querySelector('#toggle-darkMode').classList.contains('active')) {
    editor.setTheme("ace/theme/chrome")
  } else {
    editor.setTheme("ace/theme/dracula")
  }
}


function actibeLblButton () {
  document.querySelectorAll('.buttons-left button').forEach((item) => item.classList.remove('active'))
  this.classList.add('active')
}

document.querySelectorAll('.buttons-left button').forEach((button) => {
  button.addEventListener('click', actibeLblButton)
})
