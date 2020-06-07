import React, { Component } from "react";
import {Layout, Menu} from "antd";
import { HomeOutlined } from "@ant-design/icons";

const { Header } = Layout;

class AppBar extends Component{
    constructor(props) {
        super(props);

        this.state = {
            current: 'home',
        };
    };

    handleClick = e => {
        console.log('click: ', e);
        this.setState({ current: e.key });
    };

    render() {
        return(
            <Header className='Header' style={{ padding: 0 }}>
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    <Menu.Item key='home' icon={<HomeOutlined />}> Home </Menu.Item>
                </Menu>
            </Header>
        )
    }
}

export default AppBar;



