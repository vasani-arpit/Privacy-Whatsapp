import React from 'react';
import 'antd/dist/antd.css';
import '../../UI/index.css';
import { Layout } from 'antd';
import { List, Divider } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { QuestionCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { BsFillPencilFill, BsPlay } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import LongMenu from './Sidemenudropdown';
import FlowChart from './FlowChart';

const { Header, Sider, Content } = Layout;

const workflows = [{
    desc: 'Message from x',
    id: 1
},
{
    desc: 'You were added to a group by x',
    id: 2
},
{
    desc: 'Status update from user x',
    id: 3
},
];

const conditions = [{
    desc: 'When',
    id: 1
},
{
    desc: 'On schedule',
    id: 2
}
];

const functions = [{
    desc: 'Set',
    id: 1
},
{
    desc: 'Archive item',
    id: 2
},
{
    desc: 'Run',
    id: 3
},
];


const AutomationTab = () => {
    const handleOnclick = (desc: string, id: number) => {

        //write if else conditions based on ids for implementation of corresponding feature
        console.log(desc, id);
    }

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
                                <List.Item key={item.id} onClick={() => handleOnclick(item.desc, item.id)} style={{ cursor: "pointer" }}>{item.desc}</List.Item>}
                        />
                    </Sider>
                    <Content className={"content-automation"}>
                       <FlowChart/>
                    </Content>

                    <Sider width="22vw" >

                        <Divider orientation="left">
                            <div className="chip">
                                coming soon
                            </div>

                        </Divider>
                        <div style={{ lineHeight: "normal", margin: 8, color: "#315C5C", fontSize: 16 }}>create and edit your workflow</div>
                        <hr style={{ marginInline: 10 }} />

                        <div className="divisionsider">
                            <div className="siderTitle">Conditionals</div>

                            <List
                                size="small"
                                className="List"
                                dataSource={conditions}
                                renderItem={item =>

                                    <div className="rightlist"
                                        key={item.id} onClick={() => handleOnclick(item.desc, item.id)}
                                        style={{ cursor: "pointer" }}>

                                        {item.id == 1 ? <QuestionCircleOutlined style={{ color: "#387FA8", fontSize: 16 }} /> : <ClockCircleOutlined style={{ color: "#C48D3F", fontSize: 16 }} />}

                                        {item.desc}
                                        <LongMenu />
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

                                    <div className="rightlist"
                                        key={item.id} onClick={() => handleOnclick(item.desc, item.id)}
                                        style={{ cursor: "pointer" }}>
                                        {item.id == 1 ? <BsFillPencilFill style={{ color: "#CEA44D", fontSize: 16 }} /> : ""}
                                        {item.id == 2 ? <MdDeleteOutline style={{ color: "#CEA44D", fontSize: 18 }} /> : ""}
                                        {item.id == 3 ? <BsPlay style={{ color: "#CEA44D", fontSize: 18 }} /> : ""}

                                        {item.desc}
                                        <LongMenu />
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


