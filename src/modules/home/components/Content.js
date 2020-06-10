import React, { useState } from 'react';
import TabBar from '../../../common/tabbar';
const tabArray = ["Sign In"];

const SignIn = (props) => {
    const [signIn, setTab] = useState(false);
    return (<div className="sign_up">
        <div className="signup_top_content">
            <TabBar data={tabArray} direction="horizontal" />
        </div>
        {!signIn ? <div className="signup_container">
            <input type="text" placeholder={"Username"} />
            <input type="text" placeholder={"Password"} />
            <button className="button" onClick={props.onLoginClick}>Login</button>
            <div className="signup_bottom_content">
                <label>Remember Password</label>
                <label>Forgot Password ?</label>
            </div>

        </div> :
            <div className="signup_container">
                <input type="text" placeholder={"Username"} />
                <input type="text" placeholder={"Username"} />
                <input type="text" placeholder={"Username"} />
                <input type="text" placeholder={"Username"} />
                <input type="text" placeholder={"Username"} />
                <input type="text" placeholder={"Password"} />
                <input type="text" placeholder={"Username"} />
                <input type="text" placeholder={"Username"} />
                <input type="text" placeholder={"Password"} />
                <button className="button">Register</button>
            </div>
        }
    </div>)
}

const Content = (props) => {
    return (<div className="home_content">
            <SignIn onLoginClick={props.onLoginClick} />
        
    </div>)
}
export default Content;
