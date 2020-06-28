import React, { useState } from 'react';
import RoutePath from '../../route';
import { PMKIcon, ADMKIcon } from '../../constants/Icons';
import { Menu, Icon, Button, Layout } from 'antd';
import 'antd/dist/antd.css';

const { Sider } = Layout;
const { SubMenu } = Menu;


const Sidebar = (props) => {
    const [selectedIndex, setTab] = useState(0);
    const [selectedLanguageIndex, setLanguage] = useState(props.selectedLanguageIndex);
    const [collapsed, setCollapsed] = useState(false);

    function handleClick(event) {
        //console.log("EEEE", index);
        // setTab(event.key);
        let path = "";
        switch (event.key) {

            case "dealers":
                {
                    path = RoutePath.DEALERS;
                    break;
                }
            case "stock_details":
                {
                    path = RoutePath.STOCK_DETAILS;
                    break;
                }
            case "reports":
                {
                    path = RoutePath.REPORTS;
                    break;
                }
            case "investments":
                {
                    path = RoutePath.INVESTMENTS;
                    break;
                }
            case "sales":
                {
                    path = RoutePath.SALES;
                    break;
                }
            case "settings":
                {
                    path = RoutePath.SETTINGS;
                    break;
                }
            default:
                path = "admin";
                break;

        }
        console.log(path);
        RoutePath.redirect(path);

    }


    function toggleCollapsed() {
        setCollapsed(!collapsed);
        props.onCollapseClick(!collapsed);
    }

    return (
        <div className={props.isSidebarCollapsed ? "sidebar_collapsed" : "sidebar"}>
            <div className="toggle_container">
                <Button type="primary" onClick={toggleCollapsed}>
                    <Icon type={collapsed ? 'right' : 'left'} className="icon" />
                </Button>
            </div>
            <div className={collapsed ? "profile_icon_collapsed" : "profile_icon"} >
                <img src={ADMKIcon} />
            </div>
            <hr className="horizontal-line"></hr>

            <div className="sidebar_content">

                <div className="menu_items_container">
                    <Sider trigger={null} collapsible collapsed={collapsed}>
                        <Menu
                            mode="inline"
                            theme="dark"
                            inlineCollapsed={collapsed}
                            onClick={handleClick}>


                            <Menu.Item key="sales">
                                <Icon type="snippets" />
                                <span>
                                    Billing
                                    </span>
                            </Menu.Item>

                            <Menu.Item key="investments">
                                <Icon type="wallet" />
                                <span>
                                    Purchases
                                    </span>
                            </Menu.Item>

                            <Menu.Item key="dealers">
                                <Icon type="user" className="menu_icon" />
                                <span>
                                    Dealers
                                    </span>
                            </Menu.Item>

                            <Menu.Item key="stock_details">
                                <Icon type="stock" />
                                <span>
                                    Inventory
                                    </span>
                            </Menu.Item>

                            <Menu.Item key="reports">
                                <Icon type="bar-chart" />
                                <span>
                                    Reports
                                    </span>
                            </Menu.Item>

                            <Menu.Item key="settings">
                                <Icon type="setting" />
                                <span>
                                    Settings
                                    </span>
                            </Menu.Item>






                        </Menu>
                    </Sider>

                </div>

            </div >
        </div >
    )
}
export default Sidebar;