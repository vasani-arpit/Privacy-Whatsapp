// import React from 'react'
// import 'antd/dist/antd.css';
// import '../index.css';
// import { Layout, Menu, Button} from 'antd';
// import { MessageOutlined, UserOutlined, FileImageOutlined } from '@ant-design/icons';
// import HeaderTab from './HeaderTab';

// function SettingsModal() {
//     const { Sider } = Layout;
//     return (
//         <div>
//             <Layout>
//             <Sider
//             breakpoint="lg"
//             collapsedWidth="0"
//             onBreakpoint={broken => {
//                 console.log(broken);
//             }}
//             onCollapse={(collapsed, type) => {
//                 console.log(collapsed, type);
//             }}
//             >
//             <div className="logo" />
//             <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} >
//                 <Menu.Item key="1" icon={<UserOutlined />} onClick={()=> console.log("blur contact names")}>
//                 Blur contact names
//                 </Menu.Item>
//                 <Menu.Item key="2" icon={<FileImageOutlined />} onClick={()=> console.log("blur images")}>
//                 Blur contact images
//                 </Menu.Item>
//                 <Menu.Item key="3" icon={ <MessageOutlined />} onClick={()=> console.log("blur last msg")}>
//                 Blur last message
//                 </Menu.Item>
//                 <Button type="primary" block onClick={()=> console.log("save")} >
//                 Save
//                 </Button>
               
//             </Menu>
//             </Sider>
            
//            <HeaderTab/>
           
//         </Layout>
//         </div>
//     )
// }

// export default SettingsModal;

import {useState}from 'react';
import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Modal, Button, Checkbox } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

function SettingsModal(){
    const [modalVisible, setmodalVisible] = useState(false);
  
    function onChange(e : any) {
        
        console.log(`checked = ${e.target.checked}`);
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
          className="mainmodal"
        >
           <Checkbox onChange={onChange}> Blur contact names</Checkbox>
           <br/> <br/>
           <Checkbox onChange={onChange}> Blur contact images</Checkbox> 
           <br/> <br/>
           <Checkbox onChange={onChange}> Blur last message</Checkbox>  
        
         {/* we will add save button if need as ok button can do the task write logic in place of console.log */}
          {/* <Button type="primary" block onClick={()=> console.log("save")} >
                 Save
            </Button> */}
               
        </Modal>
      </>
    );
  
}

export default SettingsModal;


