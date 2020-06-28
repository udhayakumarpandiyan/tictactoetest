import React from 'react';
import { Form, DatePicker, Input, Select, Button, InputNumber } from 'antd';
import moment from 'moment';
import { getCurrentDate } from '../../../utils';
const Option = Select.Option;
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

const AddNewForm = (props) => {
    let { getFieldDecorator } = props.form;

    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };


    function onLogin() {
        props.onLoginClick();
    }

    const validateUserName = (rule, value, callback) => {
        callback();
        // if (value && value.length < 6) {
        //     callback('Requires minimum 3 characters');
        // } else if (value && value.length > 20) {
        //     callback('Customer Name should not be more than 20 characters');
        // }
        // else {
        //     callback();
        // }
    }

    const onInputChange = (e, elementName) => {
        let inputField = e.target;
        console.log("User", inputField);
    }


    return (
        <div className="modal-content">
            <Form className="form"
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >

                <Form.Item>
                    {getFieldDecorator('category', {
                        rules: [{
                            required: false, message: 'Please select item category',
                        },
                        {
                            validator: validateUserName
                        }],
                        initialValue: null
                    })(
                        <Select placeholder="Item category">
                            <Option key={'ELE'} value="Electrical">Electrical</Option>
                        </Select>
                    )}
                </Form.Item>
                <Form.Item >
                    {getFieldDecorator('brand', {
                        rules: [{
                            required: false, message: 'Please select brand',
                        },
                        {
                            validator: validateUserName
                        }],
                        initialValue: null
                    })(

                        <Select placeholder="Brand">
                            <Option key={'GML'} value="Gold Medal">Gold Medal</Option>
                        </Select>
                    )}
                </Form.Item>
            </Form>
            <Form.Item>
                {getFieldDecorator('name', {
                    rules: [{
                        required: false, message: 'Please enter item name',
                    },
                    {
                        validator: validateUserName
                    }],
                    onChange: (e) => onInputChange(e, 'name'),
                    initialValue: null
                })(
                    <Input placeholder="Item name" className="input" />
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('type', {
                    rules: [{
                        required: false, message: 'Please select type of item ',
                    },
                    {
                        validator: validateUserName
                    }],
                    onChange: (e) => onInputChange(e, 'type'),
                    initialValue: null
                })(
                    <Input placeholder="Item type" />
                )
                }
            </Form.Item>

            <Form.Item >
                {getFieldDecorator('quantity', {
                    rules: [{
                        required: false, message: 'Please select item quantity ',
                    },
                    {
                        validator: validateUserName
                    }],
                    onChange: (e) => onInputChange(e, 'quantity'),
                    initialValue: null
                })(

                    <InputNumber placeholder="Quantity" min={1} max={1000} />
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('unit', {
                    rules: [{
                        required: false, message: 'Please select unit ',
                    },
                    {
                        validator: validateUserName
                    }],
                    onChange: (e) => onInputChange(e, 'unit'),
                    initialValue: null
                })(
                    <Select placeholder="Units">
                        <Option key={'ad'} value="Pieces">Pieces</Option>
                    </Select>
                )}
            </Form.Item>

            <Form.Item >
                {getFieldDecorator('price', {
                    rules: [{
                        required: false, message: 'Please enter item price',
                    },
                    {
                        validator: validateUserName
                    }],
                    onChange: (e) => onInputChange(e, 'price'),
                    initialValue: null
                })(
                    <Input placeholder="Price" />
                )}
            </Form.Item>

            <Form.Item >
                {getFieldDecorator('deduction', {
                    rules: [{
                        required: false, message: 'Please enter deduction percentage',
                    },
                    {
                        validator: validateUserName
                    }],
                    onChange: (e) => onInputChange(e, 'deduction'),
                    initialValue: null
                })(
                    <Input placeholder="Dedcution %" />
                )}
            </Form.Item>
            <Form.Item >
                {getFieldDecorator('gst', {
                    rules: [{
                        required: false, message: 'Please enter GST percentage',
                    },
                    {
                        validator: validateUserName
                    }],
                    onChange: (e) => onInputChange(e, 'gst'),
                    initialValue: null
                })(
                    <Input placeholder="GST %" />
                )}
            </Form.Item>
            <Form.Item >
                {getFieldDecorator('profit', {
                    rules: [{
                        required: false, message: 'Please enter profit percentage',
                    },
                    {
                        validator: validateUserName
                    }],
                    onChange: (e) => onInputChange(e, 'profit'),
                    initialValue: null
                })(
                    <Input placeholder="Profit %" />
                )}
            </Form.Item>
        </div >
    )

}
const AddNew = Form.create()(AddNewForm);
export default AddNew;
