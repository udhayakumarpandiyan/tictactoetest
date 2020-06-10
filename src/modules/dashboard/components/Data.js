import React, { useState } from 'react';
import '../styles/index.scss';
const Data = (props) => {
    let lang = props.lang ? props.lang.login : {};
    let data = props.data || {};
    return (
        <div className="inner-container">
            <div className="title-container">
                <label className="title">Data</label>
            </div>
            <div className="label-item">
                Total Members : <label>{data.totalMembers}</label>
            </div>
            <div className="label-item">
                Top District : <label>{data.topDistrict}</label>
            </div>
            <div className="label-item">
                Top Contributors: <label>{data.topContributor}</label>
            </div>
            <div className="label-item">
                Members upscanded: <label></label>
            </div>
        </div>
    )
}
export default Data;