import HtmlEditor from './HtmlEditor.jsx'
import CssEditor from './CssEditor.jsx'
import JsEditor from './JsEditor.jsx'
import './EditorsContainer.css'

import useEditorStore from '../store/store.js'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const EditorsContainer = () => {
  const { openModal } = useEditorStore()
  return (
    <Tabs forceRenderTabPanel={true} className="editor-container">
      <TabList>
        <Tab><i className='bx bxl-html5'></i></Tab>
        <Tab><i className='bx bxl-css3'></i></Tab>
        <Tab><i className='bx bxl-javascript'></i></Tab>
      </TabList>
      <button className="config-btn" onClick={openModal}>config</button>
      <TabPanel>
        <HtmlEditor/>
      </TabPanel>
      <TabPanel>
        <CssEditor/>
      </TabPanel>
      <TabPanel>
        <JsEditor/>
      </TabPanel>
    </Tabs>
  )
}

export default EditorsContainer
