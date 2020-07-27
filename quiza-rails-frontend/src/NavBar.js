import React, { useEffect, useState } from 'react';
import { Link,useHistory} from 'react-router-dom'
import axios from 'axios';
import './NavBar.css'

function NavBar({ authInfo, setAuthInfo }) {
    const history = useHistory();
    const logOutAdmin = () => {
        console.log('test');
        setAuthInfo({
            token: "",
            exp: "",
            username: ""
        });
        history.push('/');
        
    }
    const showAdminInfo = () => {
        if (authInfo.token) {
            return <div>
                Welcome {authInfo.username} | <div style={{ 'cursor': 'pointer', 'color': 'red' }} className={'d-inline'} onClick={logOutAdmin}>logout</div>
            </div>
        }
    }

    return (
        <div className={'nav-bar'}>
            <div className={'row pt-2 ml-0 mr-0 '}>
                <div className={'col-10 offset-2 '}>
                    <div className={'d-inline h4 nav-item '}><Link to={`/`}>Home</Link></div>
                    <div className={'d-inline ml-4 nav-item h4'}><Link to={`/courses`}>Student Panel</Link></div>
                    <div className={'d-inline ml-4 h4 nav-item '}><Link to={`/admin`}>Admin Panel</Link></div>
                    <div className={'d-inline float-right mr-4'}>{showAdminInfo()}</div>


                </div>
            </div>
        </div>
    );
}

export default NavBar;