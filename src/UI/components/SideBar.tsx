import React from 'react'
import 'antd/dist/antd.css';
import '../index.css';
import { Layout, Menu, Button} from 'antd';
import { MessageOutlined, UserOutlined, FileImageOutlined } from '@ant-design/icons';
import { ArchiveTab } from './ArchiveTab';
import HeaderTab from './HeaderTab';

function SideBar() {
    const { Sider } = Layout;
    return (
        <div>
            <Layout>
            <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
            >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} >
                <Menu.Item key="1" icon={<UserOutlined />} onClick={()=> console.log("blur contact names")}>
                Blur contact names
                </Menu.Item>
                <Menu.Item key="2" icon={<FileImageOutlined />} onClick={()=> console.log("blur images")}>
                Blur contact images
                </Menu.Item>
                <Menu.Item key="3" icon={ <MessageOutlined />} onClick={()=> console.log("blur last msg")}>
                Blur last message
                </Menu.Item>
                <Button type="primary" block onClick={()=> console.log("save")} >
                Save
                </Button>
               
            </Menu>
            </Sider>
            
           <HeaderTab/>
           
        </Layout>
        </div>
    )
}

export default SideBar;
