import React, {useState} from 'react';
import 'antd/dist/antd.css';
import '../../UI/index.css';
import { Layout } from 'antd';
import { List, Divider } from 'antd';
import { QuestionCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { BsFillPencilFill, BsPlay } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import LongMenu from './Sidemenudropdown';
import FlowChart from './FlowChart';
import itemsArr from './FlowChart';

const {  Sider, Content } = Layout;

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

const WhenList = [{
    desc: 'Recieve message',
    id: 1
},
{
    desc: 'Added to a group',
    id: 2
},
{
    desc: 'Status update ',
    id: 3
},
];

const SetList = [{
    desc: 'reply to message',
    id: 1
},
{
    desc: 'approve the group',
    id: 2
},
{
    desc: 'view update ',
    id: 3
},
];
// @ts-ignore
console.log(itemsArr.itemsArr)


const AutomationTab = () => {
    const [titleVal, setTitleVal]= useState("When");
    const handleOnclick = (desc: string, id: number) => {

        //write if else conditions based on ids for implementation of corresponding feature
        console.log(desc, id);
    }
    const handleCallback = (titleVal: string) =>{
        setTitleVal(titleVal);
    }

    console.log(titleVal);
    const handleOptionclick=(title:string)=>{
        console.log(title);
    }

    return (
        <div>
            <Layout>
                
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
                       <FlowChart parentCallback={handleCallback}/>
                    </Content>

                    <Sider width="22vw" >

                        <div style={{ lineHeight: "normal", margin: 8, color: "#315C5C", fontSize: 16 }}>create and edit your workflow</div>
                        <hr style={{ marginInline: 10 }} />
                        <div>
                            {titleVal=="When"? (
                                WhenList.map((item)=>{
                                    return(
                                        <p className="optionsList" key={item.id} 
                                        onClick={()=>handleOptionclick(item.desc)}>
                                             {item.desc}</p>
                                    )
                                   
                                })
                            ) :(
                                SetList.map((item)=>{
                                    return(
                                        <p className="optionsList" key={item.id}
                                        onClick={()=>handleOptionclick(item.desc)}>
                                             {item.desc}</p>
                                    )
                                })
                            ) }
                        </div>
                       

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


