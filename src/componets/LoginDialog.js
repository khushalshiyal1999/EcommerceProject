import React, { useState } from "react";
import { Button, Modal, Form, Input, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import SignupDialog from "./SignUpDialog";
import { loginUser } from "../services/login";
import { useDispatch } from "react-redux";
import { LOGIN_USER } from "../redux/actions/actions";

const LoginDialog = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const handleLogin = (values) => {
    const { username, password } = values;
    const data = {
      username,
      password,
    };
    loginUser(data)
      .then((response) => {
        const storedResponse = response;
        if (response) {
          notification.success({
            message: "Login Successful",
            description: "You have successfully logged in.",
          });
        }
        localStorage.setItem(
          "userData",
          JSON.stringify({ username: response.firstname })
        );
        dispatch(LOGIN_USER(storedResponse));
        onClose();
        window.location.reload();
      })
      .catch((error) => {
        if (error) {
          notification.error({
            message: "Login Failed",
            description: "Invalid username, password, or role.",
          });
        }
      });
  };
  const [signUp, setSignUp] = useState(false);
  return (
    <div>
      <Modal
        title="Login"
        open={open}
        onCancel={onClose}
        footer={null}
        centered
        maskClosable={false}
      >
        <Form onFinish={handleLogin}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please enter your username" }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Username"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
              size="large"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              className="logn-btn"
            >
              Login
            </Button>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              block
              size="large"
              onClick={() => {
                setSignUp(true);
                onClose();
              }}
              className="logn-btn"
            >
              Not have an accout Sign up here !
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <SignupDialog open={signUp} onClose={() => setSignUp(false)} />
    </div>
  );
};

export default LoginDialog;
