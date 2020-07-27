import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import './NavBar.css'

function NavBar() {
    return (
        <div className={'nav-bar'}>
            <div className={'row pt-2 ml-0 mr-0 '}>
                <div className={'col-8 offset-2 h4'}>
                    <div className={'d-inline'}><Link to={`/`}>Home</Link></div>
                    <div className={'d-inline ml-4'}><Link to={`/courses`}>Student Panel</Link></div>
                    <div className={'d-inline ml-4'}><Link to={`/admin`}>Admin Panel</Link></div>

                </div>
            </div>
        </div>
    );
}

export default NavBar;