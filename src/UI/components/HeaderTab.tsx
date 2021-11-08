import React, { ReactChild } from 'react'
import { Tabs } from 'antd';
import { ArchiveTab } from "./ArchiveTab";
import { ConversationsTab } from "./ConversationsTab";
import SettingsModal from './SettingsModal';
const { TabPane } = Tabs;
import { WhatsAppOutlined, UploadOutlined } from '@ant-design/icons';

const HeaderTab = () => {
  return (
    <div>
      <Tabs defaultActiveKey="2" centered>
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

export default HeaderTab