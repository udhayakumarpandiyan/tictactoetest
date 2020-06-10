import React, { Component } from 'react';
import UserSummary from '../components/UserSummary';
import UserManagement from '../components/UserManagement';
import UserDetails from '../components/UserDetails';
import { Spin, Icon } from 'antd';


const users = [{
    category: "Active Dealers",
    value: 10,
    leftColor: '#dffbeb',
    color: "#29e67b"
},
{
    category: "Inactive Dealers",
    value: 2,
    leftColor: '#fbdfe4',
    color: "#e6294c"
},
{
    category: "Dealers in Contact",
    value: 6,
    leftColor: '#e9eefb',
    color: "#298ae6"
},
];


class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguageIndex: this.props.languageIndex || 0,
            isUserSelected: false,
            isLoading: false
        };
    }
    onUserClick = () => {
        //this.setState({ isLoading: true });
        this.setState({ isUserSelected: true });
    }

    render() {
        return (
            <div className="module_container">
                <label className="page-title">{`Dealers/Suppliers`}</label>
                <hr className="horizontal-line"></hr>
                {this.state.isLoading ?
                    <div className="loader_container">
                        <Spin indicator={<Icon type="loading"
                            style={{ fontSize: 60, color: "orange" }} spin />} />
                    </div>
                    : <div>
                        <UserSummary users={users} />
                        <hr className="horizontal-line"></hr>
                        {
                            this.state.isUserSelected ? <UserDetails /> : <UserManagement onUserClick={this.onUserClick} />
                        }
                    </div>
                }

            </div>
        )
    }
}
export default Admin;