
import React, { useState } from 'react';
import { Row, Col, Table, Select, Input } from 'antd';

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
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        ellipsis: true,
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        ellipsis: true,
        render: (text, row) => <span>{`${text} / ${row.unit}`}</span>,


    },

];

const products = [{ name: "9W LED Bulb", code: "9WGoldMedal", category: "Electrical", brand: "Gold Medal", price: "90.00", unit: "piece" }];

const PriceList = (props) => {
    let defaultCategory = (categories && categories.length > 0) ? categories[0].name : null;
    let defaultBrand = (brands && brands.length > 0) ? brands[0].name : null;

    const [selectedCategory, onCategoryChange] = useState(defaultCategory);
    const [selectedBrand, onBrandChange] = useState(defaultBrand);


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
                </div>
            </div>

            <Table dataSource={products}
                pagination={{ pageSize: 40 }}
                columns={columns}
                bordered
            />
        </div>
    )
}
export default PriceList;