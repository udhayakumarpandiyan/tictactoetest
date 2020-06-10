import React, { useState } from 'react';
import '../styles/index.scss';
import Data from './Data';
import { Button } from '@material-ui/core';
const Recents = (props) => {
    let lang = props.lang ? props.lang.login : {};
    let data = props.data || {};
    return (
        <div className="inner-container">
            <div className="title-container">
                <label className="title">Recents</label>
            </div>
            <div className="label-item">
                Members Newly joined : <label className="newly-joined">{data.newlyJoined}</label>
            </div>
            <div className="label-item">
                Pending Requests : <label className="pending">{data.requestsPending}</label>
                <Button>Take action</Button>
            </div>
            <div className="label-item">
                Members upscanded: <label className="upscanded">{data.upscanded}</label>
               
            </div>
            <div className="label-item">
                Members upscanded: <label></label>
            </div>
        </div >
    )
}
export default Recents;