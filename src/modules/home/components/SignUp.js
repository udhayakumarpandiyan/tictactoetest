import React, { useState } from 'react';
import { LogoIcon } from '../../../constants/Icons';
import { Select, Row, Form, Icon, Col, Input } from 'antd';
const Option = Select.Option;

const businessType = [{ name: "Reatailer", id: "RT" },
{ name: "Whole-saler", id: "WS" },
{ name: "Dealer", id: "DL" },
{ name: "Trader", id: "TR" },
{ name: "Supplier", id: "SL" },
{ name: "Distributor", id: "DT" },
{ name: "Others", id: "OT" }];


const businessNature = [{ name: "Electricals", id: "EC" },
{ name: "Hardwares", id: "HW" },
{ name: "Electricals and Hardwares", id: "EH" },
{ name: "PVC", id: "PV" },
{ name: "Paints", id: "PT" },
{ name: "Solutions", id: "SL" },
{ name: "Plumbing", id: "PB" },
{ name: "Manufacturing", id: "MF" },
{ name: "Tools", id: "TL" }];


const SignUpForm = (props) => {
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

    const onSignUp = (event) => {

        event.preventDefault();
        props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                let userData = reconstructData(values);
                props.registerUser(userData);
            }
        });
    }
        const reconstructData = (data) => {
            return {
                customers: [],
                dealers: [],
                products: [],
                businessName: data.businessName,
                businessType: data.businessType,
                businessNature: data.businessNature,
                businessAddres: data.businessAddress,
                gstin: data.gstin || "",
                username: data.userName,
                firstName: data.firstName,
                lastName: data.lastName,
                hash: data.password,
                emailId: data.email,
                profilePicture:'',
                createdDate : new Date(),
                mobileNumber: data.mobileNumber,
                whatsappNumber: data.whatsappNumber,
            }
        }

        return (
            <Row className="signup_outer_container">
                <Col className="signup_container">
                    <div className="logo-container">
                        <img src={LogoIcon} className="logo" />
                        <label>Trackmyshop</label>
                    </div>

                    <Form className="form"
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >

                        <Form.Item label="Business name">
                            {getFieldDecorator('businessName', {
                                rules: [{
                                    required: true, message: 'Please enter Business name',
                                },
                                {
                                    validator: validateUserName
                                }],
                                onChange: (e) => onInputChange(e, 'businessName'),
                                initialValue: null
                            })(
                                <Input type="businessName"
                                    name="businessName" placeholder="Business name" />
                            )}

                        </Form.Item>
                        <Form.Item label="Business type">

                            {getFieldDecorator('businessType', {
                                rules: [{
                                    required: true, message: 'Please select business type',
                                },
                                {
                                    validator: validateUserName
                                }],
                                onChange: (e) => onInputChange(e, 'businessType'),
                                initialValue: null
                            })(
                                <Select type="businessType"
                                    name="businessType" placeholder="Business type" >
                                    {businessType.map((type) => (
                                        <Option key={type.id} value={type.name}>
                                            {type.name}
                                        </Option>
                                    ))}
                                </Select>
                            )}

                        </Form.Item>

                        <Form.Item label="Business nature">
                            {getFieldDecorator('businessNature', {
                                rules: [{
                                    required: false, message: 'Please select business nature',
                                },
                                {
                                    validator: validateUserName
                                }],
                                onChange: (e) => onInputChange(e, 'businessNature'),
                                initialValue: null
                            })(
                                <Select type="businessNature"
                                    name="businessNature " placeholder="Business Nature" >
                                    {businessNature.map((type) => (
                                        <Option key={type.id} value={type.name}>
                                            {type.name}
                                        </Option>
                                    ))}
                                </Select>
                            )}

                        </Form.Item>


                        <Form.Item label="Business address">
                            {getFieldDecorator('businessAddress', {
                                rules: [{
                                    required: true, message: 'Please enter Business Address',
                                },
                                {
                                    validator: validateUserName
                                }],
                                onChange: (e) => onInputChange(e, 'businessAddress'),
                                initialValue: null
                            })(
                                <Input.TextArea type="businessAddress"
                                    name="businessAddress" placeholder="Business Address" />
                            )}

                        </Form.Item>


                        <Form.Item label="GST Number">
                            {getFieldDecorator('gstin', {
                                rules: [{
                                    required: true, message: 'Please enter GSTIN',
                                },
                                {
                                    validator: validateUserName
                                }],
                                onChange: (e) => onInputChange(e, 'gstin'),
                                initialValue: null
                            })(
                                <Input type="gstin"
                                    name="gstin" placeholder="GST number" />
                            )}

                        </Form.Item>

                        <Form.Item label="User name">
                            {getFieldDecorator('userName', {
                                rules: [{
                                    required: true, message: 'Please enter user name',
                                },
                                {
                                    validator: validateUserName
                                }],
                                onChange: (e) => onInputChange(e, 'userName'),
                                initialValue: null
                            })(
                                <Input type="userName"
                                    name="userName" placeholder="Username" />
                            )}

                        </Form.Item>
                        <Form.Item label="First name">
                            {getFieldDecorator('firstName', {
                                rules: [{
                                    required: true, message: 'Please enter user name',
                                },
                                {
                                    validator: validateUserName
                                }],
                                onChange: (e) => onInputChange(e, 'firstName'),
                                initialValue: null
                            })(
                                <Input type="firstName"
                                    name="firstName" placeholder="First name" />
                            )}

                        </Form.Item>
                        <Form.Item label="Last name">
                            {getFieldDecorator('lastName', {
                                rules: [{
                                    required: false, message: 'Please enter last name',
                                },
                                {
                                    validator: validateUserName
                                }],
                                onChange: (e) => onInputChange(e, 'lastName'),
                                initialValue: null
                            })(
                                <Input type="lastName"
                                    name="lastName" placeholder="Last name" />
                            )}

                        </Form.Item>
                        <Form.Item label="Password">
                            {getFieldDecorator('password', {
                                rules: [{
                                    required: true, message: 'Please enter password',
                                },
                                {
                                    validator: validateUserName
                                }],
                                onChange: (e) => onInputChange(e, 'password'),
                                initialValue: null
                            })(
                                <Input type="password"
                                    name="password" placeholder="Password" />
                            )}

                        </Form.Item>

                        <Form.Item label="Re-type passoword">
                            {getFieldDecorator('retypePassword', {
                                rules: [{
                                    required: true, message: 'Please enter password again',
                                },
                                {
                                    validator: validateUserName
                                }],
                                onChange: (e) => onInputChange(e, 'retypePassword'),
                                initialValue: null
                            })(
                                <Input type="retypePassword"
                                    name="retypePassword" placeholder="Type password again" />
                            )}

                        </Form.Item>

                        <Form.Item label="Date of birth">
                            {getFieldDecorator('dob', {
                                rules: [{
                                    required: false, message: 'Please enter date of birth',
                                },
                                {
                                    validator: validateUserName
                                }],
                                onChange: (e) => onInputChange(e, 'dob'),
                                initialValue: null
                            })(
                                <Input type="dob"
                                    name="dob" placeholder="DOB" />
                            )}

                        </Form.Item>

                        <Form.Item label="Mobile number">
                            {getFieldDecorator('mobileNumber', {
                                rules: [{
                                    required: true, message: 'Please enter mobile number',
                                },
                                {
                                    validator: validateUserName
                                }],
                                onChange: (e) => onInputChange(e, 'mobileNumber'),
                                initialValue: null
                            })(
                                <Input type="mobileNumber"
                                    name="mobileNumber" placeholder="Mobile number" />
                            )}

                        </Form.Item>
                        <Form.Item label="WhatsApp number">
                            {getFieldDecorator('whatsappNumber', {
                                rules: [{
                                    required: false, message: 'Please enter WhatsApp number',
                                },
                                {
                                    validator: validateUserName
                                }],
                                onChange: (e) => onInputChange(e, 'whatsappNumber'),
                                initialValue: null
                            })(
                                <Input type="whatsappNumber"
                                    name="whatsappNumber" placeholder="WhatsApp number" />
                            )}

                        </Form.Item>


                        <Form.Item label="Email id">
                            {getFieldDecorator('email', {
                                rules: [{
                                    required: true, message: 'Please enter email id',
                                },
                                {
                                    validator: validateUserName
                                }],
                                onChange: (e) => onInputChange(e, 'email'),
                                initialValue: null
                            })(
                                <Input type="email"
                                    name="email" placeholder="Email id" />
                            )}

                        </Form.Item>

                    </Form>

                    <div>
                        <button className="back-button" onClick={props.onBackButtonClick}>{`<< Back`}</button>
                        <button className="back-button">Reset</button>
                        <button className="button" onClick={onSignUp}>Register</button>
                    </div>
                </Col>
            </Row>

        )
    }
    const SignUp = Form.create()(SignUpForm);


    export default SignUp;