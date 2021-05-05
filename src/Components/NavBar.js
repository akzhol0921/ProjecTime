import React from 'react';
import './NavBar.css'
import {useHistory} from "react-router-dom";

function NavBar(props) {
    const history = useHistory();
    function OpenPage(page){
        if (!page) {
            page = ''
        }
        history.push('/'+page)
    }
    return (
        <div className="navbar">
            <div className="logo-box">
                <img src="/logo.png" alt="logo" className="logo"/>
            </div>
            <div className="page-icons">
                <div className="page-icon">
                    <i className="material-icons">
                        notifications
                    </i>
                </div>
                <div className="page-icon" onClick={() => OpenPage()}>
                    <i className="material-icons">
                        widgets
                    </i>
                </div>
                <div className="page-icon" onClick={() => OpenPage('tables')}>
                    <i className="material-icons">
                        table_view
                    </i>
                </div>
                <div className="page-icon" >
                    <i className="material-icons">
                        group
                    </i>
                </div>
                <div className="page-icon" onClick={() => OpenPage('statistics')}>
                    <i className="material-icons">
                        assessment
                    </i>
                </div>
                <div className="page-icon">
                    <i className="material-icons">
                        settings
                    </i>
                </div>
            </div>
            <div className="avatar-box">
                <img src="/avatar.jpg" alt="avatar" className="avatar"/>
            </div>
        </div>
    );
}

export default NavBar;
