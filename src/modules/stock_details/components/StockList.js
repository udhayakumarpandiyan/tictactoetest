
import React, { useState } from 'react';
import { Row, Col, Table, DatePicker, Input, Select, Button, InputNumber } from 'antd';
import { useTheme } from '@material-ui/core';
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

const brands = [{ name: "Fybros", category: "Electrical" },
{ name: "GoldMedal", category: "Electrical" },
{ name: "Legrand", category: "Electrical" },
{ name: "Surya", category: "Electrical" },
{ name: "Philips", category: "Electrical" },
{ name: "Crompton", category: "Electrical" },
{ name: "Daspan", category: "Electrical" },
{ name: "Others", category: "Electrical" }];

const columns = [
    {
        title: 'Item Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Item Code',
        dataIndex: 'code',
        key: 'code',
        ellipsis: true
    },
    {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
    },

    {
        title: 'Brand',
        dataIndex: 'brand',
        key: 'brand',
        ellipsis: true,
    },

    {
        title: 'Available Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
        ellipsis: true,
        render: (text, row) => row.unit ? <span>{`${text} - ${row.unit}`}</span> : <span>{text}</span>,

    },

    {
        title: 'Order Required',
        dataIndex: 'units',
        key: 'units',
        ellipsis: true,
        order_alarm_when: 10,
        render: (text, row) => {
            return (
                row.quantity <= row.order_alarm_when ?
                    <span className="yes"> YES
                    <button className="place-order-btn">Place order</button>
                    </span> : <span className="no"> NO
                    </span>
            )

        }

    },

];

const products = [{
    name: "9W LED Bulb",
    code: "9WGoldMedal",
    category: "Electrical",
    brand: "Gold Medal",
    price: "90.00",
    quantity: 5,
    order_alarm_when: 10,
    unit: 'pieces',

},

{
    name: "9W LED Bulb",
    code: "9WSurya",
    category: "Electrical",
    brand: "Surya",
    price: "90.00",
    quantity: 20,
    order_alarm_when: 10,
    unit: 'pieces',

},
{
    name: "9W LED Bulb",
    code: "9WSurya",
    category: "Electrical",
    brand: "Surya",
    price: "90.00",
    quantity: 20,
    unit: 'pieces',
    order_alarm_when: 30,
},
{
    name: "9W LED Bulb",
    code: "9WGoldMedal",
    category: "Electrical",
    brand: "Gold Medal",
    price: "90.00",
    quantity: 5,
    unit: 'pieces',
    order_alarm_when: 10,
},
{
    name: "9W LED Bulb",
    code: "9WGoldMedal",
    category: "Electrical",
    brand: "Gold Medal",
    price: "90.00",
    quantity: 5,
    unit: 'pieces',
    order_alarm_when: 10,
},
{
    name: "9W LED Bulb",
    code: "9WSurya",
    category: "Electrical",
    brand: "Surya",
    price: "90.00",
    quantity: 20,
    unit: 'pieces',
    order_alarm_when: 10,
},
{
    name: "9W LED Bulb",
    code: "9WSurya",
    category: "Electrical",
    brand: "Surya",
    price: "90.00",
    quantity: 20,
    unit: 'pieces',
    order_alarm_when: 10,
},
{
    name: "9W LED Bulb",
    code: "9WSurya",
    category: "Electrical",
    brand: "Surya",
    price: "90.00",
    quantity: 20,
    unit: 'pieces',
    order_alarm_when: 10,
},
{
    name: "9W LED Bulb",
    code: "9WSurya",
    category: "Electrical",
    brand: "Surya",
    price: "90.00",
    quantity: 20,
    unit: 'pieces',
    order_alarm_when: 10,
},
{
    name: "9W LED Bulb",
    code: "9WSurya",
    category: "Electrical",
    brand: "Surya",
    price: "90.00",
    quantity: 20,
    unit: 'pieces',
    order_alarm_when: 10,
},
{
    name: "9W LED Bulb",
    code: "9WSurya",
    category: "Electrical",
    brand: "Surya",
    price: "90.00",
    quantity: 20,
    unit: 'pieces',
    order_alarm_when: 10,
},
{
    name: "9W LED Bulb",
    code: "9WSurya",
    category: "Electrical",
    brand: "Surya",
    price: "90.00",
    quantity: 20,
    unit: 'pieces',
    order_alarm_when: 10,
},
{
    name: "9W LED Bulb",
    code: "9WSurya",
    category: "Electrical",
    brand: "Surya",
    price: "90.00",
    quantity: 20,
    unit: 'pieces',
    order_alarm_when: 10,
},
{
    name: "9W LED Bulb",
    code: "9WGoldMedal",
    category: "Electrical",
    brand: "Gold Medal",
    price: "90.00",
    quantity: 5,
    unit: 'pieces',
    order_alarm_when: 10,
},
{
    name: "9W LED Bulb",
    code: "9WGoldMedal",
    category: "Electrical",
    brand: "Gold Medal",
    price: "90.00",
    quantity: 5,
    unit: 'pieces',
    order_alarm_when: 10,
},
];

const StockList = (props) => {
    let defaultCategory = (categories && categories.length > 0) ? categories[0].name : null;
    let defaultBrand = (brands && brands.length > 0) ? brands[0].name : null;

    const [selectedCategory, onCategoryChange] = useState(defaultCategory);
    const [selectedBrand, onBrandChange] = useState(defaultBrand);
    const [showPopup, setShowPopup] = useState(false);


    const onBrandSelect = (value) => {
        if (value === "Others") {

        }
        else {
            onBrandChange(value);
        }
        props.getPriceList({ category: selectedCategory, brand: selectedBrand });
    }

    const onCategorySelect = (value) => {

        onCategoryChange(value);

    }

    const onAddNewItemClick = () => {
        setShowPopup(true);
    }
    const onPopupClose = () => {
        setShowPopup(false);
    }


    return (
        <div className="pricelist-container">
            <div className="top-container">
            <label>Filter by </label>
                <div className="left-container"> 
                    <Select placeholder="Select Catergory"
                        defaultValue={defaultCategory}
                        className="dropdown"
                        onChange={onCategorySelect}>
                        {categories.map((category, index) => (
                            <Option key={"option" + index} value={category.name}>{category.name}</Option>
                        ))}
                    </Select>

                    <Select placeholder="Select Brand" defaultValue={defaultBrand}
                        className="dropdown" onChange={(event) => onBrandSelect(event)}>
                        {brands.map((brand, index) => (
                            <Option key={index} value={brand.name}>{brand.name}</Option>
                        ))}
                    </Select>
                </div>
                <div className="right-container">
                    <Search placeholder="Search"
                        className="search"
                        onSearch={value => console.log(value)}
                        enterButton />
                    <Button disabled={showPopup} className="button"
                        onClick={onAddNewItemClick}> New Item</Button>
                </div>
            </div>


            <Table dataSource={products}
                pagination={{ pageSize: 40 }}
                columns={columns}
                bordered
            />


            <Modal isOpen={showPopup} onClose={onPopupClose}
                className="modal" >
                <div style={{ width: '100%' }}>

                    <DatePicker />
                    <Input placeholder="Product Name" className="input" />
                    <Input placeholder="Brand" />
                    <Input placeholder="Product Code" />
                    <Select placeholder="Dealer" mode="combobox">
                        <Option key={'sad'} value="Dealer">Dealer</Option>
                    </Select>
                    <InputNumber placeholder="Quantity" min={1} max={1000} />
                    <Select placeholder="units" mode="combobox">
                        <Option key={'ad'} value="Pieces">Pieces</Option>
                    </Select>
                    <Input placeholder="Price" />

                    <Input />
                </div>
            </Modal>
        </div>
    )
}
export default StockList;