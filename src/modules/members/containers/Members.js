import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeLanguage } from '../../../store/actions/language';
import PartyMembers from '../components/PartyMembers';
import DistrictWise from '../components/DistrictWise';
import { Row, Col, Tabs } from 'antd';
import '../styles/index.scss';
import InChargers from '../components/InChargers';
import RoutePath from '../../../route';
import history from '../../../route/history';

const { TabPane } = Tabs;
let lang = {};
let unlisten;
const members = [{
    memberId: "17153052176", name: "Murugan", constituency: "Neyveli",
    booth: "52", age: "52", mobile: "+91894384874", photo: "", address: "",
    posting: "District Secratary", joinedOn: "01/09/2001"
},
{
    memberId: "17153052176", name: "Murugan", constituency: "Neyveli",
    booth: "52", age: "52", mobile: "+91894384874", photo: "", address: "",
    posting: "District Secratary", joinedOn: "01/09/2001"
},
{
    memberId: "17153052176", name: "Murugan", constituency: "Neyveli",
    booth: "52", age: "52", mobile: "+91894384874", photo: "", address: "",
    posting: "District Secratary", joinedOn: "01/09/2001"
},
{
    memberId: "17153052176", name: "Murugan", constituency: "Neyveli",
    booth: "52", age: "52", mobile: "+91894384874", photo: "", address: "",
    posting: "District Secratary", joinedOn: "01/09/2001"
},
{
    memberId: "17153052176", name: "Murugan", constituency: "Neyveli",
    booth: "52", age: "52", mobile: "+91894384874", photo: "", address: "",
    posting: "District Secratary", joinedOn: "01/09/2001"
},
{
    memberId: "17153052176", name: "Murugan", constituency: "Neyveli",
    booth: "52", age: "52", mobile: "+91894384874", photo: "", address: "",
    posting: "District Secratary", joinedOn: "01/09/2001"
}
    , {
    memberId: "17153052176", name: "Murugan", constituency: "Neyveli",
    booth: "52", age: "52", mobile: "+91894384874", photo: "", address: "",
    posting: "District Secratary", joinedOn: "01/09/2001"
},
{
    memberId: "17153052176", name: "Murugan", constituency: "Neyveli",
    booth: "52", age: "52", mobile: "+91894384874", photo: "", address: "",
    posting: "District Secratary", joinedOn: "01/09/2001"
},
{
    memberId: "17153052176", name: "Murugan", constituency: "Neyveli",
    booth: "52", age: "52", mobile: "+91894384874", photo: "", address: "",
    posting: "District Secratary", joinedOn: "01/09/2001"
},
{
    memberId: "17153052176", name: "Murugan", constituency: "Neyveli",
    booth: "52", age: "52", mobile: "+91894384874", photo: "", address: "",
    posting: "District Secratary", joinedOn: "01/09/2001"
},
{
    memberId: "17153052176", name: "Murugan", constituency: "Neyveli",
    booth: "52", age: "52", mobile: "+91894384874", photo: "", address: "",
    posting: "District Secratary", joinedOn: "01/09/2001"
}

];

class Members extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedTabIndex: 0 };
    }
    componentDidMount() {
        unlisten = history.listen((location, action) => {
            this.setState({ currentMenu: location.pathname });
        });

        if (!this.props.language) {
            this.props.changeLanguage(0);
        }
        else {
            lang = this.props.language.members;
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.language && this.props.language !== nextProps.language) {
            lang = nextProps.language.members;
        }
        if (this.props.currentPage !== nextProps.currentPage) {
            console.log("hh", nextProps.currentPage);
        }
    }
    onLanguageChange = (index) => {
        this.setState({ selectedTabIndex: index });

    }
    render() {
        return (
            <div className="module_container">
                <label className="page-title">{'Party Members'}</label>
                <hr className="horizontal-line"></hr>
                <Row>
                    <Col>

                        {this.state.currentMenu === RoutePath.MEMBERS && <Tabs tabPosition={this.state.tabPosition}>
                            <TabPane tab="Members List" key="1">
                                <PartyMembers members={members} />
                            </TabPane>

                            <TabPane tab="District-wise summary" key="2">
                                <DistrictWise />
                            </TabPane>
                        </Tabs>
                        }
                        {this.state.currentMenu === RoutePath.INCHARGERS && <Tabs tabPosition={this.state.tabPosition}>
                            <TabPane tab="In-chargers List" key="1">
                                <InChargers inchargers={members} />
                            </TabPane>
                            <TabPane tab="District-wise summary" key="2">
                                <DistrictWise />
                            </TabPane>
                        </Tabs>
                        }
                    </Col>
                </Row>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        language: state.languageReducer.language.language
    }
}
export default connect(mapStateToProps, { changeLanguage })(Members);
