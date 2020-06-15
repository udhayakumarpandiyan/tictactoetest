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


    userLogin = (user) => {
        this.props.userLogin(user);
    }

    registerUser = (userData) => {
        this.props.registerUser(userData);
    }


    goBack = () => {
        this.setState({ showSignUp: !this.state.showSignUp });
    }

    render() {
        return (<div className="home_page" >

            {this.state.showSignUp ? <div className="signup_content">

                <SignUp onBackButtonClick={this.goBack}
                    registerUser={this.registerUser} />
            </div>
                : <div className="signin_content">
                    <SignIn
                        userLogin={this.userLogin}
                        onSignupClick={this.goBack} />

                </div>
            }
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