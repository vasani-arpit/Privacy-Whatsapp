import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Menu, Dropdown } from 'antd';
import { FaEllipsisV } from "react-icons/fa";

export default function LongMenu() {
    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="">
                    1st menu item
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="">
                    2nd menu item
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="">
                    3rd menu item
                </a>
            </Menu.Item>
        </Menu>
    );
    return (
        <div>
            <Dropdown overlay={menu} placement="bottomRight" arrow>
                <FaEllipsisV style={{ color: "#38A873" }} />
            </Dropdown>
        </div>
    );
}