import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import { userLogin } from '../../../store/actions/authentication';
import '../styles/index.scss';
import { HomeBGIcon } from '../../../constants/Icons';

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
        if (this.props.isSignedIn !== nextProps.isSignedIn) {
        }
    }


    onLoginClick = (user) => {
        this.props.userLogin(user);
    }

    onSignUpClick = (user) => {
        this.setState({ showSignUp: true });
    }

    render() {
        return (<div className="home_page" >
            <img src={HomeBGIcon} className="bg_image" />
            <div className="home_content">
                {
                    this.state.showSignUp ? <SignUp /> :
                        <SignIn onSignupClick={this.onSignUpClick} />
                }
            </div>
        </div>)
    }
}
const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, { userLogin })(HomePage);