import React from 'react';
import MainContent from '../components/Content';
import '../styles/index.scss';

const Shell = (props) => {

    return (
        <div className="shell">
            <div className="main_content">
                <MainContent />
            </div>
        </div>
    )
}


export default Shell;