import './style.css'

const fragment = document.createDocumentFragment();
const template = document.querySelector("#result-template").content;
let searchResults = []

Split(['#editor-container', '#preview'], {
  direction: 'vertical'
})

var editor = ace.edit("editor")
// editor.setTheme("ace/theme/dracula")
var Emmet = ace.require("ace/ext/emmet")
editor.setOption("enableEmmet", true)

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
  }, 1500)
})

document.querySelector('#search').addEventListener('keyup', (e) => {
  async function getCdn () {
    const response = await fetch(`https://api.cdnjs.com/libraries?search=${e.target.value}&fields=filename,description,version`)
    const data = await response.json()
    searchResults = data.results
    
    
    searchResults.forEach(result => {
      template.querySelector('p').textContent = result.name
      const clone = template.cloneNode(true)
      
      fragment.appendChild(clone)
    })
    
    document.querySelector('#search-results').appendChild(fragment)
  }
  if (e.target.value.length > 2) {
    setTimeout(() => {
      document.querySelector('#search-results').innerHTML = ''
      getCdn()
    }, 1500)
  }
})
