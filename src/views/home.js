import React from 'react';
import { Row, Col, Button, Form, Input, Alert } from 'antd';
import Hardware from '../assets/hardware.jpg'
import TextArea from "antd/es/input/TextArea";


export default function Home() {
    const [state, setState] = React.useState({
        fname: '',
        lname: '',
        phoneNumber: '',
        email: '',
        message: ''
    });


    const layout =  {
        labelCol: {
            span: 24,
        },
        wrapperCol: {
            span: 24,
        },
    };

    return(
        <>
            <Row style={{ background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${Hardware})`, backgroundSize: 'cover', backgroundPosition: 'center' }} gutter={100}>
                <Col span={24} style={{ marginTop: 50, marginBottom: 250, textAlign: 'center' }}>
                    <h1 style={{ color: 'white', fontSize: '34px' }}>Need your computer fixed?</h1>
                    <br />
                    <h1 style={{ color: 'white', fontSize: '34px' }}>Your computer is slow and need it to run faster?</h1>
                    <br />
                    <h1 style={{ color: 'white', fontSize: '34px' }}>Need a custom built computer done by the end of the day?</h1>
                </Col>
            </Row>
            <Row gutter={50} style={{ margin: 25 }}>
                <Col span={24} style={{ margin: 'auto', marginTop: -235 }}>
                    <div style={{ padding: 20, backgroundColor: 'white', borderRadius: 5, margin: 50, marginBottom: 20, boxShadow: '0px 2px 8px 0px rgba(0,0,0,0.15)' }}>
                        <h2 style={{ textAlign: 'center' }}>Send us a message</h2>
                        <Form
                            {...layout}
                            name="basic"
                            initialValues={{
                                remember: true
                            }}
                            layout="vertical"
                            size="Large"
                        >
                            <Row gutter={40}>
                                <Col span={12}>
                                    <Form.Item
                                        label="First Name"
                                        name="Fname"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please enter your first name'
                                            },
                                        ]}
                                    >
                                        <Input value={state.fname} />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label="Last Name"
                                        name="Lname"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please enter your last name'
                                            },
                                        ]}
                                    >
                                        <Input value={state.lname} />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label="Phone Number"
                                        name="phoneNumber"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please enter your phone number'
                                            },
                                        ]}
                                    >
                                        <Input value={state.phoneNumber} />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please enter your email'
                                            },
                                        ]}
                                    >
                                        <Input value={state.email} />
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item
                                        label="Message"
                                        name="message"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please enter a description'
                                            },
                                        ]}
                                    >
                                        <TextArea style={{ height: 150 }} value={state.message} />
                                        <Alert message='Please specify what type of device you need to be fixed' type='warning' banner />
                                    </Form.Item>

                                </Col>
                            </Row>
                            <Row>
                                <Button type="primary" style={{ marginRight: '1em' }}>Send</Button>
                                <Button type="primary" danger>Clear</Button>
                            </Row>
                        </Form>
                    </div>
                </Col>
            </Row>
        </>


    );
};
