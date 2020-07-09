import React, { useState } from 'react';
import { Row, Col, Checkbox, Select, Button, Input, Form, } from 'antd';
import Usercard from '../../../common/card/Usercard';
import '../styles/index.scss';
import AddNewDealer from './AddNewDealer';
import Modal from '../../../common/modal';

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
    ,
{
    dealer_id: '326',
    name: 'XYZ',
    business_name: 'Fybros',
    brand: 'Fybros',
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
,
{
    dealer_id: '326',
    name: 'ssfsdf',
    business_name: 'fds',
    brand: 'sdfsdf',
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
    const [showModal, setShowModal] = useState(false);

    const openModal =()=>{
        setShowModal(true);

    }
    const closeModal =()=>{
        setShowModal(false);
        
    }

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
                    <Button type="primary" className="send_message_btn" onClick={openModal}>Add new dealer</Button>
                </Col>
            </Row>

            <Row type="flex" gutter={60}>
                {dealers.map((dealer, index) => (
                    <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={6}>
                        <Usercard dealer={dealer} onClick={props.onUserClick} />
                    </Col>
                ))}
            </Row>
            <Modal isOpen={showModal} onClose={closeModal}
                className="modal" title={"New Dealer"} >
                <AddNewDealer addNewDealer={props.addNewDealer} />
            </Modal>
        </div>


    )
}
export default UserManagement;