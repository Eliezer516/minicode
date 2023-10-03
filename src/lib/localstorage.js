if (!localStorage.getItem('userConfig')) {
  // Crear un objeto que contenga la configuración del usuario
  const userConfig = {
    theme: 'monokai',
    fontSize: 16
  };


  // Convertir el objeto a una cadena JSON
  const userConfigJSON = JSON.stringify(userConfig);

  // Guardar la cadena JSON en el localStorage
  localStorage.setItem('userConfig', userConfigJSON);
}

if (!localStorage.getItem('editorsValue')) {
  const editorsValue = {
    html: '',
    css: '',
    js: ''
  }
  
  const editorsValueJSON = JSON.stringify(editorsValue)
  
  localStorage.setItem('editorsValue', editorsValueJSON);
}


// Recuperar la configuración del usuario
function getConfig() { 
  const userConfigJSON = localStorage.getItem('userConfig');
  const userConfig = JSON.parse(userConfigJSON);
  return userConfig
}

function updateConfig(item, value) {
  const userConfigJSON = localStorage.getItem('userConfig');
  const userConfig = JSON.parse(userConfigJSON);
  userConfig[item] = value
  localStorage.setItem('userConfig', JSON.stringify(userConfig))
}

function getEditorsValue() {
  const editorsValueJSON = localStorage.getItem('editorsValue');
  const editorsValue = JSON.parse(editorsValueJSON);
  return editorsValue
}

function updateEditorsValue(item, value) {
  const editorsValueJSON = localStorage.getItem('editorsValue')
  const editorsValue = JSON.parse(editorsValueJSON)
  editorsValue[item] = value
  localStorage.setItem('editorsValue', JSON.stringify(editorsValue))
}

export {
  getConfig,
  updateConfig,
  getEditorsValue,
  updateEditorsValue
}
