import React, { Component } from 'react';

import Sidebar from '../components/Sidebar';
import AppHeader from '../components/AppHeader';
import MainContent from '../components/Content';
import HomePage from '../../modules/home/containers/HomePage';
import { Layout, Button, Drawer, Icon, Menu } from 'antd';
import { LogoIcon } from '../../constants/Icons';

import { connect } from 'react-redux';
import { changeLanguage } from '../../store/actions/language';
import RoutePath from '../../route';
import history from '../../route/history';

import '../styles/index.scss';
import 'antd/dist/antd.css';


const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

let lang;
let unlisten;

const menuItems = ["Dashboard", "Members", "Reports", "E-card", "For support"];

class Shell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignedIn: false, selectedLanguage: this.props.language,
            selectedLanguageIndex: this.props.languageIndex || 0,
            menuItems: menuItems,
            isSidebarCollapsed: false,
            drawerVisible: false,
            drawerPlacement: 'left',
            currentMenu: undefined

        };

    }
    showDrawer = () => {
        this.setState({
            drawerVisible: !this.state.drawerVisible,
        });
    };
    hideDrawer = () => {
        this.setState({
            drawerVisible: false,
        });
    };
    handleClick = (event) => {
        let path = undefined;
        switch (event.key) {

            case "dealers":
                {
                    path = RoutePath.DEALERS;
                    break;
                }
            case "investments":
                {
                    path = RoutePath.SALES;
                    break;
                }

            case "sales":
                {
                    path = RoutePath.SALES;
                    break;
                }
            case "reports":
                {
                    path = RoutePath.REPORTS;
                    break;
                }
            case "stock_details":
                {
                    path = RoutePath.STOCK_DETAILS;
                    break;
                }
            case "settings":
                {
                    path = RoutePath.SETTINGS;
                    break;
                }
            default:
                path = "homepage";
                break;

        }
        if (path) {
            RoutePath.redirect(path);
            this.hideDrawer();
        }

    }
    componentDidMount() {
        if (!this.props.language) {
            this.props.changeLanguage(0);
        }
        // unlisten = history.listen((location, action) => {
        //     this.setState({ currentMenu: location.pathname });
        // });

        //this.getUserList();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.isSignedIn !== nextProps.isSignedIn) {
            this.setState({
                isSignedIn: nextProps.isSignedIn,
                selectedLanguageIndex: this.props.languageIndex
            });
            RoutePath.redirect(RoutePath.DASHBOARD);
        }
        if (this.props.language !== nextProps.language) {
            lang = nextProps.language;
            this.updateMenuItems(lang);
        }
    }
    getUserList = async () => {
        fetch('http://localhost:3002/users').then(res => res.json())
            .then(json => console.log(json));;

    };


    updateMenuItems = (lang) => {
        let menuItems = [];
        for (let menu in lang.menu) {
            menuItems.push(lang.menu[menu]);
        }
        this.setState({ menuItems: menuItems });
    };
    onLanguageChange = (index) => {
        this.setState({ selectedLanguageIndex: index });
        this.props.changeLanguage(index);

    }

    onCollapseClick = (collapsed) => {
        this.setState({ isSidebarCollapsed: collapsed });
    }

    render() {
        return (<div className="shell">

            {!this.state.isSignedIn ? <div>
                <AppHeader menuItems={this.state.menuItems}
                    isSignedIn={this.props.isSignedIn}
                    selectedLanguageIndex={this.state.selectedLanguageIndex}
                    onLanguageChange={this.onLanguageChange}
                    lang={this.props.language} />

                <div className="main_content">
                    <Sidebar
                        menuItems={this.state.menuItems}
                        isSignedIn={this.props.isSignedIn}
                        selectedLanguageIndex={this.state.selectedLanguageIndex}
                        onLanguageChange={this.onLanguageChange}
                        lang={this.props.language}
                        isSidebarCollapsed={this.state.isSidebarCollapsed}
                        onCollapseClick={this.onCollapseClick}
                        currentMenu={this.state.currentMenu} />

                    <MainContent currentPage={this.state.currentMenu}
                        isSidebarCollapsed={this.state.isSidebarCollapsed}
                        lang={this.props.language} ></MainContent>

                </div>
                <div className="menu_hambuger">
                    <Button onClick={this.showDrawer} >
                        <Icon type="menu" style={{ color: "#ffffff", fontSize: '28px' }} />
                    </Button>
                    <Drawer
                        title={
                            <div className="profile_icon" style={{
                                height: "72px", width: "72px",
                                borderRadius: '100em',
                                backgroundColor: "#fff",
                                margin: '25px 36px'
                            }}>
                                <img src={''}
                                    style={{
                                        height: "72px", width: "72px",
                                        borderRadius: '100em'
                                    }}>
                                </img>
                            </div>
                        }
                        placement={this.state.drawerPlacement}
                        closable={true}
                        onClose={this.hideDrawer}
                        visible={this.state.drawerVisible}
                        width={200}
                        drawerStyle={{ color: "#fff" }}
                        headerStyle={{
                            height: "130px",
                            color: '#ffffff',
                            backgroundColor: "#001529",
                            borderBottom: "none",
                        }}
                        bodyStyle={{ padding: '0px', backgroundColor: "#001529", height: "79.5%" }}
                    >
                        <div className="menu_container">
                            <Menu
                                mode="inline"
                                theme="dark"
                                onClick={this.handleClick}>

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
                        </div>
                    </Drawer>



                    {/* <div className="logo_container">
                        <img src={LogoIcon} />
                    </div> */}
                </div >
            </div>
                :
                <div className="home_container">
                    <HomePage />
                </div>
            }
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.authenticationReducer.loggedIn
    }
}

export default connect(mapStateToProps, { changeLanguage })(Shell);