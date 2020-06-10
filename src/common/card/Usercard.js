import React from 'react';
import { Checkbox, Switch } from 'antd';
import './Usercard.scss';

const Usercard = (props) => {

    function onSwitchClick(checked, event) {
        if (event) {
            event.stopPropagation();
        }
    }
    function onClick() {
        if(props.onClick)
        {
            props.onClick();
        }
    }

    return (<div className="usercard_container"
        onClick={onClick}>
        <div className="top_content">

            <Switch className="active_switch" onClick={onSwitchClick}></Switch>

        </div>
        <div className="card_content">
            <img>
            </img>
            <div className="bottom_content">
                <label className="name">{props.dealer ? props.dealer.brand : ''}</label>
                <label>{props.dealer ? props.dealer.business_name : ''}</label>
                <label>{props.dealer ? props.dealer.name : ''}</label>
            </div>

        </div>

    </div>)
}
export default Usercard;
