import React, { ReactChild, useState } from 'react'
import { Tabs } from 'antd';
import { ArchiveTab } from "./ArchiveTab";
import { ConversationsTab } from "./ConversationsTab";
import AutomationTab from "./AutomationTab";
const { TabPane } = Tabs;
import { EditOutlined } from '@ant-design/icons';
import { WhatsAppOutlined, UploadOutlined } from '@ant-design/icons';

const HeaderTab = () => {

  return (
    <div>
      <Tabs defaultActiveKey="3" centered>
        <TabPane tab={<span><WhatsAppOutlined />Conversations</span>}
          key="1">
          <ConversationsTab />
        </TabPane>
        <TabPane tab={<span><UploadOutlined />Archives</span>}
          key="2">
          <ArchiveTab />
        </TabPane>
        <TabPane tab={<span><EditOutlined />Automation</span>}
          key="3">
          <AutomationTab />
        </TabPane>
      </Tabs>
    </div>

  )
}

export default HeaderTab;