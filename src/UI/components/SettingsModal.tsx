import {useState}from 'react';
import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Modal, Button, Checkbox } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

function SettingsModal(){
    const [modalVisible, setmodalVisible] = useState(false);
  
    function onBlurNames(e : any) {
        
        console.log(` blur names checked = ${e.target.checked} `);
    }
    
    function onBlurContact(e : any) {
        
      console.log(`blur contacts checked = ${e.target.checked} `);
  }
  
  function onBlurmessage(e : any) {
        
    console.log(`blur message checked = ${e.target.checked} `);
  }
    

    return (
      <>
        <Button  type="text" onClick={() => setmodalVisible(true)} className="modal">
        <SettingOutlined  style={{fontSize: 20}}/>
        </Button>
        <Modal
          title="Select the settings you want to add in your chats."
          centered
          visible={modalVisible}
          onOk={() => {
              setmodalVisible(false) ;
              // add logic here
              console.log("save");
            } }
          onCancel={() => setmodalVisible(false)}
        >
           <Checkbox onChange={onBlurNames}> Blur contact names</Checkbox>
           <br/> <br/>
           <Checkbox onChange={onBlurContact}> Blur contact images</Checkbox> 
           <br/> <br/>
           <Checkbox onChange={onBlurmessage}> Blur last message</Checkbox>  
        
         {/* we will add save button if need as ok button can do the task write logic in place of console.log */}
          {/* <Button type="primary" block onClick={()=> console.log("save")} >
                 Save
            </Button> */}
               
        </Modal>
      </>
    );
  
}

export default SettingsModal;


