import React, { useState } from 'react';
import { LogoIcon } from '../../../constants/Icons';
import { Input, Button, Row, Col } from 'antd';


const SignIn = (props) => {
    const [isSignedIn, changeView] = useState(false);
    const [isRemeberPasswordChecked, changeRememberPassword] = useState(false);

    function onLogin() {
        changeView(true);
    }
    function onSubmit() {
        let user = {};
        props.onLoginClick(user);
    }
    function onRememberPasswordChange(checked) {
        changeRememberPassword(!checked);
    }

    return (
        <Row className="outer-container">
            <Col className="signin_container">
                <div className="logo-container">
                    <img src={LogoIcon} className="logo" />
                    <label>tackmyshop</label>
                </div>
                <div>
                    <Input id="username" type="text" placeholder={'User ID or Email ID '} />
                    <Input type="text" placeholder={'Password'} />
                </div>

                <div className="signup_bottom_content">
                    <label className="forgot">{'Forgot password'}</label>
                </div>

                <Button className="button"
                    onClick={onLogin}>{'Sign In'}</Button>
                <label className="signup_now">{'Not registered ?'}
                    <span onClick={props.onSignupClick}>{'Sign Up'}</span>
                </label>

            </Col>
        </Row>

    )
}
export default SignIn;