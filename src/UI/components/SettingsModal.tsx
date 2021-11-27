import { useState } from 'react';
import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Modal, Button, Checkbox } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { ipcRenderer } from 'electron';

function SettingsModal() {
  const [modalVisible, setmodalVisible] = useState(false);

  function onBlurNames(e: any) {

    console.log(` blur names checked = ${e.target.checked} `);
    var blurNameStatus = e.target.checked;
    if (blurNameStatus) {
      ipcRenderer.send("blur-name");
    } else {
      ipcRenderer.send("show-name");
    }

  }

  function onBlurDpImage(e: any) {

    console.log(`blur contacts checked = ${e.target.checked} `);
    var blurPhotoStatus = e.target.checked;
    if (blurPhotoStatus) {
      ipcRenderer.send("blur-dp")
    } else {
      console.log("showing dp from here")
      ipcRenderer.send("show-dp");
    }
  }


  return (
    <>
      <Button type="text" onClick={() => setmodalVisible(true)} className="modal">
        <SettingOutlined style={{ fontSize: 20 }} />
      </Button>
      <Modal
        title="Select the settings you want to add in your chats."
        centered
        visible={modalVisible}
        onOk={() => {
          setmodalVisible(false);
          console.log("save");
        }}
        onCancel={() => setmodalVisible(false)}
      >
        <Checkbox onChange={onBlurNames}> Blur contact names and messages</Checkbox>
        <br /> <br />
        <Checkbox onChange={onBlurDpImage}> Blur contact images</Checkbox>
        <br /> <br />

      </Modal>
    </>
  );

}

export default SettingsModal;


