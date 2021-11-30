import React from 'react';
import 'antd/dist/antd.css';
import '../../UI/index.css';
import { Layout } from 'antd';
import { List, Typography, Divider } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const workflows = [
    'Message from x',
    'You were added to a group by x',
    'Status update from user x',
    'content',
    'content',
];

const conditions = [
    'When',
    'On schedule'
    
];

const functions = [
    'Set',
    'Archive item',
    'Run',
   
];

const AutomationTab = () => {
    return (
        <div>
            <Layout>
                <Header>
                    <span>
                        <ArrowLeftOutlined style={{ padding: 3, fontSize: 16, fontWeight: 600 }} />
                    </span>
                    Workflows
                    </Header>
                <Layout>
                    <Sider width="25vw">
                        <Divider orientation="left">Default workflows</Divider>
                        <List
                            size="small"
                            dataSource={workflows}
                            renderItem={item =>
                                <List.Item>{item}</List.Item>}
                        />
                    </Sider>
                    <Content className={"content-automation"}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis temporibus iure in, beatae totam quas sequi molestiae dolore excepturi delectus, veniam accusamus quisquam ratione mollitia fuga architecto illum quos eos?
                    </Content>

                    <Sider width="22vw" >

                        <Divider orientation="left">
                            <div className="chip">
                                coming soon
                            </div>

                        </Divider>
                        <div style={{ lineHeight: "normal", margin: 8, color: "#315C5C", fontSize: 16 }}>create and edit your workflow</div>
                        <hr style={{ marginInline: 10}} />
                        
                      <div className="divisionsider">
                      <div className="siderTitle">Conditionals</div>
                      
                      <List
                            size="small"
                            className="List"
                            dataSource={conditions}
                            renderItem={item =>
                                
                                    <div className="rightlist" >
                                        {item}
                                    </div>}
                        />
                      </div>
                       
                        <div className="divisionsider">
                        <div className="siderTitle">Functions</div>
                       
                        <List
                            size="small"
                            className="List"
                            dataSource={functions}
                            renderItem={item =>
                                
                                    <div className="rightlist" >
                                        {item}
                                    </div>}
                        />
                        </div>
                    </Sider>
                </Layout>

            </Layout>

        </div>
    )
}

export default AutomationTab;


