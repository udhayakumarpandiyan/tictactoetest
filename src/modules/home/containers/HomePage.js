import React from 'react';
import Home from '../components/Home';
import '../styles/index.scss';

const HomePage = (props) => {

    return (<div className="home_page" >
        <div className="name-container">
            <label>Tic</label>
            <label>Tac</label>
            <label>Toe</label>
        </div>
        <div className="home_content">
            <Home/>
        </div>

    </div>)
}
export default HomePage;