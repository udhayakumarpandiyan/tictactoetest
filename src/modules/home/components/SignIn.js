import React, { useState } from 'react';
import { LogoIcon } from '../../../constants/Icons';
import { Input, Button, Form, Checkbox, Row, Col, Icon } from 'antd';

const SignInForm = (props) => {
    const { getFieldDecorator } = props.form;


    const [isSignedIn, changeView] = useState(false);
    const [isRemeberPasswordChecked, changeRememberPassword] = useState(false);

    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };


    function onSubmit() {
        let user = {};
        props.onLoginClick(user);
    }
    function onRememberPasswordChange(checked) {
        changeRememberPassword(!checked);
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

    const onLogin = (event) => {

        event.preventDefault();
        props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                props.userLogin({ username: values.username, password: values.password });
            }
        });
    }

    const onInputChange = (e, elementName) => {
        let inputField = e.target;
        console.log("User", inputField);
    }

    return (
        <Row className="outer-container">
            <Col className="signin_container">
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
                    <Form.Item>
                        <Icon type="user" style={{ fontSize: "20px", marginRight: "10px" }} />

                        {getFieldDecorator('username', {
                            rules: [{
                                required: true, message: 'Please enter user name',
                            },
                            {
                                validator: validateUserName
                            }],
                            onChange: (e) => onInputChange(e, 'username'),
                            initialValue: null
                        })(
                            <Input type="username"
                                name="username" placeholder="Username" />
                        )}

                    </Form.Item>


                    <Form.Item>
                        <Icon type="key" style={{ fontSize: "20px", marginRight: "10px" }} />

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
                            <Input.Password type="password"
                                name="password" placeholder="Password" />
                        )}

                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <div>
                            <Checkbox>Remember me</Checkbox>
                            <label className="forgot">{'Forgot password'}</label>
                        </div>
                    </Form.Item>
                    <Form.Item className="button-container">
                        <Button className="button" htmlType="submit"
                            onClick={onLogin}>{'Sign In'}</Button>

                    </Form.Item>
                </Form>
                <div>
                    <label className="signup_now">{"Don't have an account? "}
                        <span onClick={props.onSignupClick}>{'Sign up'}</span>
                    </label>
                </div>



                {/* <div>
                    <Icon type="user" style={{fontSize:"20px", marginRight:"10px"}} />
                    <Input id="username" type="text" placeholder={'User ID or Email ID '} />
                    <Icon type="key" style={{fontSize:"20px",marginRight:"10px"}} />
                    <Input type="text" placeholder={'Password'} />
                </div> */}





            </Col>
        </Row>

    )
}
const SignIn = Form.create()(SignInForm);


export default SignIn;