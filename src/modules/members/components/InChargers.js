import React, { useState } from 'react';
import { Table, Select } from 'antd';
import 'antd/dist/antd.css';

const Option = Select.Option;

const districts = [{ district: "Chennai", joined: 100, upscanded: 30 }, { district: "Vellore", joined: 100, upscanded: 30 },
{ district: "Tiruvannamalai", joined: 100, upscanded: 130 }, { district: "Cuddalore", joined: 100, upscanded: 30 },
{ district: "Villuppuram", joined: 100, upscanded: 130 }, { district: "Kancheepuram", joined: 100, upscanded: 30 },
{ district: "Tiruvallur", joined: 100, upscanded: 30 }, { district: "Kallakurichi", joined: 100, upscanded: 30 },
{ district: "Chengalpattu", joined: 100, upscanded: 30 }, { district: "Tirupathur", joined: 100, upscanded: 30 },
{ district: "Ranipettai", joined: 100, upscanded: 130 }, { district: "Thanjavur", joined: 100, upscanded: 30 }, { district: "Tiruchirappalli", joined: 100, upscanded: 30 }, { district: "Nagapattinam", joined: 100, upscanded: 30 },
{ district: "Tiruvarur", joined: 100, upscanded: 30 }, { district: "Perambalur", joined: 100, upscanded: 30 }, { district: "Ariyalur", joined: 100, upscanded: 30 },
{ district: "Coimbatore", joined: 100, upscanded: 130 }, { district: "Nilgiris", joined: 100, upscanded: 30 }, { district: "Salem", joined: 100, upscanded: 30 },
{ district: "Dharmapuri", joined: 100, upscanded: 30 }, { district: "Erode", joined: 100, upscanded: 30 }, { district: "Karur", joined: 100, upscanded: 30 },
{ district: "Namakkal", joined: 100, upscanded: 30 }, { district: "Krishnagiri", joined: 100, upscanded: 30 }, { district: "Tirupur", joined: 100, upscanded: 30 }, { district: "Kanyakumari", joined: 100, upscanded: 30 },
{ district: "Madurai", joined: 100, upscanded: 130 }, { district: "Ramanathapuram", joined: 100, upscanded: 30 }, { district: "Tirunelveli", joined: 100, upscanded: 30 },
{ district: "Pudukkottai", joined: 100, upscanded: 30 }, { district: "Virudhunagar", joined: 100, upscanded: 30 }, { district: "Sivagangai", joined: 100, upscanded: 30 },
{ district: "Dindigul", joined: 100, upscanded: 30 }, { district: "Thoothukudi", joined: 100, upscanded: 30 }, { district: "Theni", joined: 100, upscanded: 30 }, { district: "Tenkasi", joined: 100, upscanded: 30 }];

const columns = [
    {
        title: 'Member Id',
        dataIndex: 'memberId',
        key: 'memberId',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        ellipsis: true
    },
    {
        title: 'Constituency',
        dataIndex: 'constituency',
        key: 'constituency',
    },

    {
        title: 'Polling Booth',
        dataIndex: 'booth',
        key: 'booth',
        ellipsis: true,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'Age',
        ellipsis: true,
        width: '60px'
    },
    {
        title: 'Mobile Number',
        dataIndex: 'mobile',
        key: 'mobile',
        ellipsis: true,

    },
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
    },
];


const InChargers = (props) => {
    return (
        <div className="inner-container" style={{ border: "none" }}>
            <div className="filters-container">
                <label>Filter by :</label>
                <Select placeholder="Select district">
                    {districts.map((district, index) => (
                        <Option key={"option" + index}>{district.district}</Option>
                    ))}
                </Select>
                <Select placeholder="Select Posting">
                    {districts.map((district, index) => (
                        <Option key={"option" + index}>{district.district}</Option>
                    ))}
                </Select>
                <Select placeholder="Select ">
                    {districts.map((district, index) => (
                        <Option key={"option" + index}>{district.district}</Option>
                    ))}
                </Select>

            </div>
            <Table dataSource={props.inchargers}
                pagination={{ pageSize: 40 }}
                columns={columns}
                bordered
            />

        </div>
    )
}
export default InChargers;