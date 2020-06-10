import React, { useState } from 'react';
import '../styles/index.scss';
const EditorLogin = (props) => {
    let lang = props.lang ? props.lang.login : {};
    return (
        <div className="signup_container">
            <input type="text" placeholder={lang && lang.username} />
            <input type="text" placeholder={lang && lang.password} />
            <button className="button" onClick={props.onLogin}>{ lang && lang.signIn}</button>
        </div>
    )
}
export default EditorLogin;