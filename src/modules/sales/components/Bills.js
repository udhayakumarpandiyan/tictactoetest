
import React, { useState } from 'react';
import { Table, Select, Input } from 'antd';
import { getDate } from '../../../utils/index';

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
        title: 'Bill number',
        dataIndex: 'bill_number',
        key: 'bill_number',
        ellipsis: true
    },
    {
        title: 'Billing date',
        dataIndex: 'billing_date',
        key: 'billing_date',
        render: (text, row) => {
            return (
                <span>{getDate(row.billing_date)}</span>
            )
        }
    },
    {
        title: 'Customer',
        dataIndex: 'customer_name',
        key: 'customer_name',
        ellipsis: true
    },
    {
        title: 'Bill Amount',
        dataIndex: 'billing_amount',
        key: 'billing_amount',
    },

    {
        title: 'Paid Amount',
        dataIndex: 'paid_amount',
        key: 'paid_amount',
        ellipsis: true,
    },
    {
        title: 'Balance Amount',
        dataIndex: 'balance_amount',
        key: 'balance_amount',
        ellipsis: true,
    }
];


const Bills = (props) => {
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

                <div className="left-container">
                </div>
                <div className="right-container">
                    <Search placeholder="Search"
                        className="search"
                        onSearch={value => console.log(value)}
                        enterButton />
                </div>
            </div>

            <Table dataSource={props.bills}
                pagination={{ pageSize: 40 }}
                columns={columns}
                bordered
            />
        </div>
    )
}
export default Bills;