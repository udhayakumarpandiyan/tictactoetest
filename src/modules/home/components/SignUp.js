import React, { useState } from 'react';
import { LogoIcon } from '../../../constants/Icons';
import { Select, Row, Col,Input } from 'antd';
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


const SignUp = (props) => {
    return (
        <Row className="signup_outer_container">
            <Col className="signup_container">
                <div className="logo-container">
                    <img src={LogoIcon} className="logo" />
                    <label>tackmyshop</label>
                </div>
                <div className="inner_container">
                    <label className="label">Business Info </label>
                    <Input className="input_full" placeholder={"Business name"} />

                    <Select placeholder={"Business type"} className="dropdown">
                        {businessType.map((type, index) => (
                            <Option key={type.id} value={type.name}>{type.name}</Option>
                        ))
                        }
                    </Select>

                    <Select placeholder={"Business nature"} className="dropdown">
                        {businessNature.map((type, index) => (
                            <Option key={type.id} value={type.name}>{type.name}</Option>
                        ))
                        }
                    </Select>
                    <Input placeholder="Business Address"/>
                    <Input placeholder="GSTIN"/>
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
            </Col>
        </Row>

    )
}
export default SignUp;