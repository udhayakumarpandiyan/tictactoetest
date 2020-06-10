import React from 'react';
import { Row, Col, Checkbox, Select, Button, Input } from 'antd';
import Usercard from '../../../common/card/Usercard';
import '../styles/index.scss';

const Option = Select.Option;
const { Search } = Input;

const categories = [{ name: "Electrical", code: "EL" },
{ name: "Plumbing", code: "PL" },
{ name: "Carpentaring", code: "CP" },
{ name: "Hardware", code: "HW" },
{ name: "Painting", code: "PT" },
{ name: "Mastics", code: "MA" },
{ name: "Others", code: "OT" },
{ name: "All", code: 'ALL' }];


const dealers = [{
    dealer_id: '324',
    name: 'Senthil',
    business_name: 'Ramalinga Periyar',
    brand: 'Gold Medal',
    mobile_number: ' 9324324743',
    whatsapp_number: '35344656',
    business_address: 'CN Palayam',
    active: true,
    products_deleivered: [],
    isCreditAllowed: true,
    account_details: { account: '3425546456', bank: 'ICICI', IFSC: '2435345' },
    last_paid_amount: 456546,
    outstanding_amount: 345,
    photo: 'qwewqe'



},
{
    dealer_id: '326',
    name: 'Murugan',
    business_name: 'Shenbaga',
    brand: 'Shenbaga',
    mobile_number: ' 932432443',
    whatsapp_number: '35344656',
    business_address: 'Cuddalore',
    active: true,
    products_deleivered: [],
    isCreditAllowed: true,
    account_details: { account: '342546456', bank: 'ICICI', IFSC: '2435345' },
    last_paid_amount: 456546,
    outstanding_amount: 345,
    photo: 'qwewqe'



}

];


const UserManagement = (props) => {
    return (
        <div className="user_management">
            <Row gutter={30} className="row_container">
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} className="column_container">
                    <label>Filter by :</label>
                    <Select placeholder="Select Category" defaultValue="All">
                        {categories.map((category, index) => (
                            <Option key={"option"} value={category.name}>{category.name}</Option>
                        ))
                        }
                    </Select>
                    <Search
                        placeholder="Search by name"
                        style={{ maxWidth: 190 }}
                    />

                </Col>
                <Col
                    style={{ paddingTop: "10px", display: "flex", justifyContent: "flex-end", alignItems: "center" }}
                    xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                    <Checkbox >Select All Users</Checkbox>
                    <Button type="primary" className="send_message_btn">Send Message</Button>
                </Col>
            </Row>

            <Row type="flex" gutter={60}>
                {dealers.map((dealer, index) => (
                    <Col>
                        <Usercard dealer={dealer} onClick={props.onUserClick} />
                    </Col>
                ))}
            </Row>
        </div>


    )
}
export default UserManagement;