import React, { useState } from 'react';
import { Link } from "react-router-dom";
import TabBar from '../../common/tabbar';
import { Select, Dropdown, Menu } from 'antd';
import { MyProfilePicIcon } from '../../constants/Icons';
import 'antd/dist/antd.css';
const Option = Select.Option;


const Header = (props) => {
    const [selectedLanguageIndex, setLanguage] = useState(0);

    function onLanguageChange(index) {
        setLanguage(index);
        //props.onLanguageChange(index);
    }
    const ProfileMenu = (
        <Menu>
            <Menu.Item>
                <Link className="dropdown-item-link">My Profile</Link>
            </Menu.Item>
            <Menu.Item>
                <Link className="dropdown-item-link">Edit Profile</Link>
            </Menu.Item>
            <Menu.Item>
                <Link className="dropdown-item-link">Logout</Link>
            </Menu.Item>
        </Menu>
    );
    return (
        <div className="header">
            {/* <div className="tab_container">
                <TabBar data={["English", "தமிழ்"]}
                    selectedIndex={selectedLanguageIndex} onTabChange={onLanguageChange} />
            </div> */}

            <Dropdown overlay={ProfileMenu}
                overlayClassName="profile-dropdown"
                placement="bottomRight">
                <div className="user_dropdown">
                    <img src={MyProfilePicIcon}></img>
                </div>
            </Dropdown>

            {/* <Select value="Machagandhi" showArrow={true} className="user_select">
                <Option key="view" value="View Profile">
                    View Profile
                </Option>
                <Option key="edit" value="Edit Profile">
                    Edit Profile
                </Option>
                <Option key="logout" value="Logout">
                    Logout
                </Option>

            </Select> */}


        </div>
    )
}
export default Header;