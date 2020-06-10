
import React, { useState } from 'react';
import { Row, Col, Table, DatePicker, Input, Select, Button, InputNumber } from 'antd';
import { useTheme } from '@material-ui/core';

const Option = Select.Option;
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
        title: 'Prodcut Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Product Code',
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
        title: 'No of Pieces',
        dataIndex: 'units',
        key: 'units',
        ellipsis: true,
        render: (text, row) => row.color ? <span>{`${text} - ${row.color}`}</span> : <span>{text}</span>,


    },

];

const products = [{
    name: "9W LED Bulb",
    code: "9WGoldMedal", category: "Electrical",
    brand: "Gold Medal",
    price: "90.00",
    units: 15
}];

const StockList = (props) => {
    let defaultCategory = (categories && categories.length > 0) ? categories[0].name : null;
    let defaultBrand = (brands && brands.length > 0) ? brands[0].name : null;

    const [selectedCategory, onCategoryChange] = useState(defaultCategory);
    const [selectedBrand, onBrandChange] = useState(defaultBrand);
    const [isNew, changeIsNew] = useState(false);


    const onBrandSelect = (value) => {
        if (value === "Others") {

        }
        else {
            onBrandChange(value);
        }
        props.getPriceList({ category: selectedCategory, brand: selectedBrand });
    }

    const onCategorySelect = (value) => {
        console.log("event : ", value);

        onCategoryChange(value);

    }

    const onAddNewItemClick = () => {
        changeIsNew(true);
    }


    return (
        <div className="pricelist-container">
            <label>Category</label>
            <Select placeholder="Select Catergory"
                defaultValue={defaultCategory}
                className="dropdown"
                onChange={onCategorySelect}>
                {categories.map((category, index) => (
                    <Option key={"option" + index} value={category.name}>{category.name}</Option>
                ))}
            </Select>
            <label>Brand</label>
            <Select placeholder="Select Brand" defaultValue={defaultBrand}
                className="dropdown" onChange={(event) => onBrandSelect(event)}>
                {brands.map((brand, index) => (
                    <Option key={index} value={brand.name}>{brand.name}</Option>
                ))}
            </Select>
            <Button disabled={isNew} onClick={onAddNewItemClick}>Add new Item</Button>

            {isNew ? <div>

                <DatePicker />
                <Input placeholder="Product Name" className="input"/>
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
            </div> : <Table dataSource={products}
                pagination={{ pageSize: 40 }}
                columns={columns}
                bordered
                />
            }
        </div>
    )
}
export default StockList;