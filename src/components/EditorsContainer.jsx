import HtmlEditor from './HtmlEditor.jsx'
import CssEditor from './CssEditor.jsx'
import JsEditor from './JsEditor.jsx'
import './EditorsContainer.css'

import useEditorStore from '../store/store.js'
import downloadCode from '../lib/download'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const EditorsContainer = () => {
  return (
    <Tabs forceRenderTabPanel={true} className="editor-container">
      <div className="buttons-container">
        <TabList>
          <Tab><button className="button"><i className='bx bxl-html5'></i></button></Tab>
          <Tab><button className="button"><i className='bx bxl-css3'></i></button></Tab>
          <Tab><button className="button"><i className='bx bxl-javascript'></i></button></Tab>
        </TabList>
        <div className="buttons-container">
          <button onClick={downloadCode} data-tooltip="Download your code" className="button tooltip-left"><i className='bx bxs-download'></i></button>
          <label htmlFor="modal_1" className="button config-btn"><i className='bx bx-cog'></i></label>
        </div>
      </div>
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
