import React, { ReactChild, useState } from 'react'
import { Tabs } from 'antd';
import { ArchiveTab } from "./ArchiveTab";
import { ConversationsTab } from "./ConversationsTab";
const { TabPane } = Tabs;
import { WhatsAppOutlined, UploadOutlined } from '@ant-design/icons';

const HeaderTab = () => {
  //const [tabKey, settabkey]= useState("2");
  //todo:
  //use tabkey to validate the settings modal, or do some other logic
  // const changetabkey=(tabKey: string)=>{
  //  if (tabKey=="1") settabkey("2");
  //  else if(tabKey=="2"){
  //    settabkey("1");
  //  }
  // }
  return (
    <div>
      <Tabs defaultActiveKey="2" centered
      // onChange={()=>changetabkey(tabKey)}
      >
      <TabPane
        tab={<span><WhatsAppOutlined />Conversations</span>}
        key="1">
        <ConversationsTab />
      </TabPane>
      <TabPane
        tab={<span><UploadOutlined />Archive</span>}
        key="2">
        <ArchiveTab/>
      </TabPane>
    
    </Tabs>

    </div>
    
  )
}

export default HeaderTab;