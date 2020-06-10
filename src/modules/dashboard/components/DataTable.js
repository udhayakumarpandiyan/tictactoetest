import React, { useState } from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';


const columns = [
    {
        title: 'District',
        dataIndex: 'district',
        key: 'district',
        sorter: (a, b) => a.district - b.district,
        //sortOrder: sortedInfo.columnKey === 'district',
        defaultSortOrder: 'descend',
        ellipsis: true,
    },
    {
        title: 'joined',
        dataIndex: 'joined',
        key: 'joined',
        sorter: (a, b) => a.joined - b.joined,
        //sortOrder: sortedInfo.columnKey === 'age',
        ellipsis: true,
    },
    {
        title: 'upscanded',
        dataIndex: 'upscanded',
        key: 'upscanded',
        sorter: (a, b) => a.upscanded - b.upscanded,
        //sortOrder: sortedInfo.columnKey === 'upscanded',
        ellipsis: true,
    },
    {
        title: '%',
        dataIndex: 'bounce',
        key: 'bounce',
        sorter: (a, b) => a.bounce - b.bounce,
        //sortOrder: sortedInfo.columnKey === 'bounce',
        width: '60px',
        ellipsis: false,
    },
];


const districts = [{ district: "Chennai", joined: 100, upscanded: 30, bounce: -5 }, { district: "Vellore", joined: 100, upscanded: 30 },
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


const DataTable = (props) => {
    return (

        <Table
            pagination={{ pageSize: 10 }}
            columns={columns}
            dataSource={districts}
            bordered
            defaultSortOrder='ascend' />
    )
}
export default DataTable;