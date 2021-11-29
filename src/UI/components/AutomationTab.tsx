import React from 'react';
import 'antd/dist/antd.css';
import '../../UI/index.css';
import { Layout } from 'antd';
import { List, Typography, Divider } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const data = [
    'Message from x',
    'You were added to a group by x',
    'Status update from user x',
    'content',
    'content',
];

const AutomationTab = () => {
    return (
        <div>
            <Layout>
                <Header>
                    <span>
                        <ArrowLeftOutlined style={{ padding: 3, fontSize: 16, fontWeight: 600 }} />
                    </span>
                    Workflows</Header>
                <Layout>
                    <Sider width="25vw">
                        <Divider orientation="left">Default workflows</Divider>
                        <List
                            size="small"
                            dataSource={data}
                            renderItem={item =>
                                <List.Item>{item}</List.Item>}
                        />
                    </Sider>
                    <Content className={"content-automation"}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis temporibus iure in, beatae totam quas sequi molestiae dolore excepturi delectus, veniam accusamus quisquam ratione mollitia fuga architecto illum quos eos?
                    </Content>
                    <Sider width="20vw" style={{ display: "flex", justifyContent: "center" }}>

                        <Divider orientation="center">
                            <div className="chip">
                                coming soon
                            </div>

                        </Divider>
                        <div style={{ lineHeight: "normal", margin: 7, color: "#315C5C", fontSize: 13 }}>create and edit your workflow</div>
                        <hr style={{ margin: 1 }} />
                        <List
                            size="small"
                            dataSource={data}
                            renderItem={item =>
                                <List.Item >
                                    <div style={{ margin: 1, border: "black" }}>
                                        {item}
                                    </div></List.Item>}
                        />
                    </Sider>
                </Layout>

            </Layout>

        </div>
    )
}

export default AutomationTab;


