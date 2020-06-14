import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import { userLogin, registerUser } from '../../../store/actions/authentication';
import '../styles/index.scss';

let lang;

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedLanguageIndex: this.props.languageIndex || 0 };

    }

    componentDidMount() {



        lang = this.props.language ? this.props.language.login : {};

        let element = document.getElementById("username");
        if (element) {
            element.focus();
        }

    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.language && this.props.language !== nextProps.language) {
            lang = nextProps.language.login;
        }
        if (this.props.registeredUser !== nextProps.registeredUser) {
            console.log('Registred : ', nextProps.registeredUser);
        }
    }


    onLoginClick = (user) => {
        this.props.userLogin(user);
    }

    onRegisterClick = (user) => {

        let testuser = {
            customers: [],
            dealers: [],
            products: [],
            username: "jayam-electricals",
            hash: "sdffsrdfgdf",
            firstName: "jayam",
            lastName: "electricals",
            mobileNumber: "9500167390",
            whatsappNumber: "9500818390",
            emailId: "jayamelectricals1@gmail.com",
            businessName: "Jayam Electricals",
            businessType: "Electricals",
            businessNature: "Retailer",
            businessAddres: "A.R.S complex, Kumbakonam Road, Panikkankuppam, Panruti, Cuddalore Dt ...",
            gstin: "GSTINQDDsdfdsf823ENSDF",
            profilePicture: "",
            createdDate: "2020 - 06 - 13T10: 34: 49.240+00: 00"

        };
        this.setState({ showSignUp: true });

        //this.props.registerUser(testuser);
    }

    render() {
        return (<div className="home_page" >
            {/* <img src={HomeBGIcon} className="bg_image" /> */}
            <div className="home_content">
                {
                    this.state.showSignUp ? <SignUp /> :
                        <SignIn
                            onLoginClick={this.onLoginClick}
                            onSignupClick={this.onRegisterClick} />
                }
            </div>
        </div>)
    }
}
const mapStateToProps = (state) => {
    return {
        //loginStatus: state.authReducer.loginStatus
        registeredUser: state.authReducer && state.authReducer.registeredUser
    }
}

export default connect(mapStateToProps, { userLogin, registerUser })(HomePage);