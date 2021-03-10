import React, { ReactChild } from 'react'
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import { WhatsAppOutlined, UploadOutlined } from '@ant-design/icons';

const HeaderTab = () => {
  return (
    <Tabs defaultActiveKey="1" centered>
      <TabPane
        tab={<span><WhatsAppOutlined />Conversations</span>}
        key="1">
        <webview id="foo" src="https://www.github.com/" className="full-page"></webview>
      </TabPane>
      <TabPane
        tab={<span><UploadOutlined />Archive</span>}
        key="2">
        Tab 2
    </TabPane>
    </Tabs>
  )
}

export default HeaderTab