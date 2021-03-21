import React, { useState } from 'react'
import { Menu, Dropdown, message, Button, Checkbox } from 'antd';
import { DownloadOutlined, DownOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
// eslint-disable-next-line @typescript-eslint/no-var-requires
import { remote } from "electron";
const dialog = remote.dialog;

const { Footer, Content } = Layout;

const SupportedFormats: string[] = ['Text', 'HTML', 'PDF', 'Single Png', 'Multiple Png']

export const ArchiveTab = () => {
    const onClick = ({ key }: any) => {
        setSelectedFileFormat(SupportedFormats[key])
        message.info(`Click on item ${key}`);
    };

    const chooseFolder = () => {
        const path = dialog.showOpenDialog({
            properties: ['openDirectory']
        });
        console.log(path)
        message.info(`Folder selected.`);
    }

    const fileFormat = (
        <Menu onClick={onClick}>
            <Menu.Item key="0">
                Text
            </Menu.Item>
            <Menu.Item key="1">
                HTML
            </Menu.Item>
            <Menu.Item key="2">
                PDF
            </Menu.Item>
            <Menu.Item key="3">
                Single png
            </Menu.Item>
            <Menu.Item key="4">
                Multiple png
            </Menu.Item>
        </Menu>
    )

    const menu = (
        <Menu>
            <Menu.Item key="1">
                <Checkbox>User1</Checkbox>
            </Menu.Item>
            <Menu.Item key="2">
                <Checkbox>User1</Checkbox>
            </Menu.Item>
            <Menu.Item key="3">
                <Checkbox>User1</Checkbox>
            </Menu.Item>
        </Menu>
    );

    const handleVisibleChange = (flag: any) => {
        setOverlayVisible(flag)
    }

    const [SelectedFileFormat, setSelectedFileFormat] = useState('Text');
    const [OverlayVisible, setOverlayVisible] = useState(false);
    return (
        <Layout style={{ backgroundColor: 'transparent' }}>
            <Content style={{ textAlign: 'center', minHeight: '78vh', background: 'transparent', display: 'table' }}>
                <p className={'natural-language-control'} style={{ display: 'table-cell', verticalAlign: 'middle', fontSize: '-webkit-xxx-large' }}>
                    Download chats of <Dropdown visible={OverlayVisible} overlay={menu} onVisibleChange={handleVisibleChange}><a className="ant-dropdown-link" href="#">
                        Chat1 and Chat2
                    </a></Dropdown> in <Dropdown overlay={fileFormat}><a>{SelectedFileFormat}</a></Dropdown> format and save it on <a onClick={chooseFolder}>Desktop</a>.
                </p>
            </Content>
            <Footer style={{ textAlign: 'center', background: 'transparent' }}>
                <Button type="primary" icon={<DownloadOutlined />} size={'large'}>Start</Button>
            </Footer>
        </Layout>
    )
}
