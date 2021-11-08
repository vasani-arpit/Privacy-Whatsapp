import React, { useState } from 'react'
import { Menu, Dropdown, message, Button, Checkbox, Form, Modal, Input } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
// eslint-disable-next-line @typescript-eslint/no-var-requires
import { remote } from "electron";
import '../index.css';
import "antd/dist/antd.css";

const dialog = remote.dialog;

const { Footer, Content } = Layout;

const SupportedFormats: string[] = ['Text', 'HTML', 'PDF', 'Single Png', 'Multiple Png']

interface Props {
    visible: boolean;
    onSave: any;
    onCancel :any;
}

const ContactForm = ({ visible, onSave, onCancel} : Props) => {
    const [form] = Form.useForm();
    return (
      <Modal
        visible={visible}
        okText="add"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onSave(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          initialValues={{
            modifier: "public"
          }}
        >
          <Form.Item
            name="contact"
            label="contact"
            rules={[
              {
                required: true,
                message: "Please input the contact name"
              }
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    );
  };

export const ArchiveTab = () => {

    const [visible, setVisible] = useState(false);
    const [SelectedFileFormat, setSelectedFileFormat] = useState('Text');
    const [contactName, setContactName]= useState("Contact");

    const onSave = (values: any) => {
      console.log("Received values of form: ", values);
      setVisible(false);
     setContactName(values.contact);
    };

    const onClick = ({ key }: any) => {
        setSelectedFileFormat(SupportedFormats[key])
        message.info(`Click on item ${key}`);
    };

    const chooseFolder = async () => {
        const path = await dialog.showOpenDialog({
            properties: ['openDirectory']
        });
        console.log(path)
        if (path.canceled) {
            console.log("User canceled the change path dialog.")
        }else{
            //TODO: take the last folder name and update it in UI
        }
        message.info(`Folder selected.`);
    }

    const fileFormat = (
        <Menu onClick={onClick}>
            <Menu.Item key="0">
                Text
            </Menu.Item>
            <Menu.Item key="1">
                Screenshot
            </Menu.Item>
            <Menu.Item key="2">
                PDF
            </Menu.Item>
          
        </Menu>
    )

    // const menu = (
    //     <Menu>
    //         <Menu.Item key="1">
    //             <Checkbox>User1</Checkbox>
    //         </Menu.Item>
    //         <Menu.Item key="2">
    //             <Checkbox>User1</Checkbox>
    //         </Menu.Item>
    //         <Menu.Item key="3">
    //             <Checkbox>User1</Checkbox>
    //         </Menu.Item>
    //     </Menu>
    // );

    return (
        <div>
            <Layout style={{ backgroundColor: 'transparent' , margin: 10}}>
 
            <Content style={{ textAlign: 'center', minHeight: '78vh', background: 'transparent', display: 'table' }}>
                <p className={'natural-language-control'} style={{ display: 'table-cell', verticalAlign: 'middle', fontSize: '-webkit-xxx-large' }}>
                    Download chats of 
                    {/* <Dropdown visible={OverlayVisible} overlay={menu} onVisibleChange={handleVisibleChange}>
                     <a className="ant-dropdown-link" href="#">
                        Chat1 and Chat2
                    </a></Dropdown>  */}
                     <Button
                        type="text"
                        size="large"
                        onClick={()=>{
                            setVisible(true);
                        }}
                        style={{color:"gray", fontFamily:"monospace",fontSize:25,  marginLeft:5, marginRight: 5, marginBottom:5}}
                    >
                        {contactName}
                    </Button>
                    <ContactForm
                        visible={visible}
                        onSave={onSave}
                        onCancel={() => {
                        setVisible(false);
                        }}
                    />
                    in <Dropdown overlay={fileFormat}><a>{SelectedFileFormat}</a></Dropdown> format and save it on <a onClick={chooseFolder}>Desktop</a>.
                </p>
                
            </Content>
            <Footer style={{ textAlign: 'center', background: 'transparent' }}>
                <Button type="primary" icon={<DownloadOutlined />} size={'large'}>Start</Button>
            </Footer>
        </Layout>
        </div>
       
    )
}
