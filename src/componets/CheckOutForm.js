import {  Form, Input, Select} from 'antd';
import { Option } from 'antd/es/mentions';
import React from 'react'
import {  CHECKOUT_FORM } from '../redux/actions/actions';
import { useDispatch } from 'react-redux';

export const CheckOutForm = ({next}) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const onSubmit = (values) => {
        dispatch(CHECKOUT_FORM(values))
        next()
    };
    let initialValues = {country: 'USA',
    state: 'California',
    city:'Los Angeles',
    courier:'DHL Express (India) Pvt. Ltd'}
    

    const validatePhoneNumber = (rule, value) => {
        const phoneNumberRegex = /^[0-9]{10}$/;
        if (value && !phoneNumberRegex.test(value)) {
            return Promise.reject('Please enter a valid phone number');
        }
        return Promise.resolve();
    };
    return (
        <Form
        id='checkout-form'
            form={form}
            layout="vertical"
            onFinish={onSubmit}
            initialValues={initialValues}
        >
            <Form.Item
                name="fullname"
                label="Full Name"
                rules={[
                    { required: true, message: 'Please enter your full name' },
                ]}
            >
                <Input placeholder="Ex: Rasyidin Arsyad Nasution" style={{ boxShadow: 'none' }} />
            </Form.Item>

            <Form.Item
                name="email"
                label="Email"
                rules={[
                    { required: true, message: 'Please enter your email' },
                    { type: 'email', message: 'Please enter a valid email' },
                ]}
            >
                <Input placeholder='Ex: rasyid.arsyad@gmail.com' style={{ boxShadow: 'none' }} />
            </Form.Item>

            <Form.Item
                name="phonenumber"
                label="Phone Number"
                rules={[
                    { required: true, message: 'Please enter your phone number' },
                    { validator: validatePhoneNumber },
                ]}
            >
                <Input placeholder='Ex: 089111888999' style={{ boxShadow: 'none' }} />
            </Form.Item>

            <Form.Item
                name="shippingaddress"
                label="Shipping Address"
                rules={[
                    { required: true, message: 'Please enter your shipping address' },
                ]}
            >
                <Input placeholder='Ex: Patriot Street Number 666, Ngaklik, Sleman' style={{ boxShadow: 'none' }} />
            </Form.Item>

            <Form.Item
                name="country"
                label="Country"
                rules={[
                    { required: true, message: 'Please select your country' },
                ]}
            >
                <Select >
                    <Option value="USA">USA</Option>
                    <Option value="UK">UK</Option>
                    <Option value="Canada">Canada</Option>
                    {/* Add more countries as needed */}
                </Select>
            </Form.Item>

            <Form.Item
                name="state"
                label="State/Province"
                rules={[
                    { required: true, message: 'Please select your state' },
                ]}
            >
                <Select >
                    <Option value="California">California</Option>
                    <Option value="New York">New York</Option>
                    <Option value="Texas">Texas</Option>
                    {/* Add more states as needed */}
                </Select>
            </Form.Item>

            <Form.Item
                name="city"
                label="City"
                rules={[
                    { required: true, message: 'Please select your city' },
                ]}
            >
                <Select >
                    <Option value="Los Angeles">Los Angeles</Option>
                    <Option value="New York City">New York City</Option>
                    <Option value="Houston">Houston</Option>
                    {/* Add more cities as needed */}
                </Select>
            </Form.Item>

            <Form.Item
                name="zipcode"
                label="Zip Code"
                rules={[
                    { required: true, message: 'Please enter your zip code' },
                ]}
            >
                <Input placeholder='Zip Code' style={{ boxShadow: 'none' }} />
            </Form.Item>
            <Form.Item
                name="courier"
                label="Choose Courier"
                rules={[
                    { required: true, message: 'Please select your courier service' },
                ]}
            >
                <Select >
                    <Option value="DHL Express (India) Pvt. Ltd">DHL Express (India) Pvt. Ltd</Option>
                    <Option value="Royal India Transport">Royal India Transport</Option>
                    <Option value="Skymoon courier service">Skymoon courier service</Option>
                    {/* Add more cities as needed */}
                </Select>
            </Form.Item>
           
        </Form>

    )
}
