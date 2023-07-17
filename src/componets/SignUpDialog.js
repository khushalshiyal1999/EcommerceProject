import React from 'react';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Modal, Form, Input, Button, notification, Select } from 'antd';
import { Option } from 'antd/es/mentions';

import { ADD_USER } from '../redux/actions/actions';
import { useDispatch } from 'react-redux';

const SignupDialog = ({ open, onClose }) => {
    const dispatch = useDispatch()
    const initialValues = { country: 'USA', }
    const handleSignup = (values) => {
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        const isUserExists = existingUsers.some(
            (user) => user.username === values.username || user.email === values.email
        );

        if (isUserExists) {
            notification.error({
                message: 'Error',
                description: 'User already exixts',
            });
            return;
        }
        dispatch(ADD_USER(values))
        notification.success({
            message: 'Signup Successful',
            description: 'Please login now',
        });
        onClose()
    };

    return (
        <>
            <Modal
                title="Sign up"
                open={open}
                onCancel={onClose}
                footer={null}
                centered
            >
                <Form onFinish={handleSignup}>
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please enter your username' }]}
                        initialvalues={initialValues}
                    >
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Username"
                            size="large"
                        />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please enter your email' }]}
                    >
                        <Input
                            prefix={<MailOutlined />}
                            placeholder="Email"
                            size="large"
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please enter your password' }]}
                    >
                        <Input.Password
                            prefix={<LockOutlined />}
                            placeholder="Password"
                            size="large"
                        />
                    </Form.Item>
                    <Form.Item
                        name="role"
                        placeholder="Select Role"
                        rules={[
                            { required: true, message: 'Please select your role' },
                        ]}
                    >
                        <Select placeholder="Select Role"
                            className='user-select'>
                            <Select.Option value="User">User</Select.Option>
                            <Select.Option value="Admin">Admin</Select.Option>
                            <Select.Option value="Super Admin">Super Admin</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block className='logn-btn'>
                            Sign up
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default SignupDialog;
