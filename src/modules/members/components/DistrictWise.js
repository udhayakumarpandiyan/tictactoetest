import React, { useState } from 'react';
import { Table, Tabs, Select, Switch } from 'antd';
import Map from '../../../common/maps/containers/Map';
import locations from '../../../common/maps/map.json';

const { TabPane } = Tabs;
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
        title: 'District',
        dataIndex: 'district',
        key: 'sistrict',
    },

    {
        title: 'Male Members',
        dataIndex: 'maleMembers',
        key: 'maleMembers',
        ellipsis: true,
    },
    {
        title: 'Female Members',
        dataIndex: 'femaleMembers',
        key: 'femaleMembers',
        ellipsis: true,
    },
    {
        title: 'Third Gender',
        dataIndex: 'thirdGender',
        key: 'thirdGender',
        ellipsis: true,

    },
    {
        title: 'Non Voting Members',
        dataIndex: 'nonVotingMembers',
        key: 'nonVotingMembers',
        ellipsis: true,

    },
    {
        title: 'Total Members',
        dataIndex: 'totalMembers',
        key: 'totalMembers',
        ellipsis: true,

    },
];



const DistrictWise = (props) => {
    const [tabPosition, setTab] = useState(0);
    function onTabChange(value) {
        alert(value);
        setTab(value);
    }
    return (
        <div className="container" style={{ border: "none" }}>
            {/* <Tabs tabPosition={tabPosition} onChange={onTabChange}> */}
            {/* <TabPane tab="Table View" key="1">
                    <Table dataSource={districts}
                        pagination={{ pageSize: 40 }}
                        columns={columns}
                        bordered
                    />
                </TabPane> */}

            {/* <TabPane tab="Map View" key="1"> */}
            <Map data={locations} multiSelect={true} />
            {/* </TabPane>
            </Tabs> */}
            {/* <div className="filters-container">
                <label>Filter by :</label>
                <Select placeholder="Select district">
                    {districts.map((district, index) => (
                        <Option key={"option" + index}>{district.district}</Option>
                    ))}

                </Select>
                <Switch defaultChecked />

            </div> */}

        </div>
    )
}
export default DistrictWise;