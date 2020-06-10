import React, { useState } from 'react';
import { LogoIcon } from '../../../constants/Icons';
import { Select } from 'antd';
const Option = Select.Option;

const SignUp = (props) => {
    return (<div className="signup_container">
        <div className="logo-container">
            <img src={LogoIcon} className="logo" />
            <label>tackmyshop</label>
        </div>
        <div className="inner_container">
            <label className="label">Business Info </label>
            <input type="text" placeholder={"Business name"} />

            <Select placeholder={"Business type"} className="dropdown">
                <Option value={'Retailer'} />
                <Option value={'Wholesaler'} />
                <Option value={'Dealer'} />
                <Option value={'Trader'} />
                <Option value={'Supplier'} />
            </Select>

            <Select placeholder={"Business nature"} className="dropdown">
                <Option value="Electricals" />
                <Option value={'Hardwares'} />
                <Option value={'Electricals & Hardwares'} />
                <Option value={'Plumbings'} />
                <Option value={'Manufacturing'} />
                <Option value={'Paints'} />
                <Option value={'Tools'} />
            </Select>
        </div>
        <div className="inner_container">
            <label className="label">User Info </label>
            <input type="text" placeholder={"User ID"} />
            <input type="text" placeholder={"Password"} />
            <input type="text" placeholder={"Type password again"} />
        </div>

        <div className="inner_container">
            <label className="label"></label>
            <input type="text" placeholder={"First name"} />
            <input type="text" placeholder={"Last name"} />
            <input type="text" placeholder={""} />
        </div>

        <div className="inner_container">
            <label className="label"></label>
            <input type="text" placeholder={"Mobile number"} />
            <input type="text" placeholder={"Whatsapp number"} />
            <input type="text" placeholder={"Email id"} />
        </div>
        <div>
            <button className="button">Back</button>
            <button className="button">Reset</button>
            <button className="button" onClick={props.onRegisterClick}>Register</button>
        </div>
    </div>

    )
}
export default SignUp;