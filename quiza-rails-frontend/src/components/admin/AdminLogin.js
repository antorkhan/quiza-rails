import React, { useEffect, useState } from 'react';
import { Link,useHistory  } from 'react-router-dom'
import axios from 'axios';



function AdminLogin({setAuthInfo}) {
    let history = useHistory();
    let [adminCred, setAdminCred] = useState({ username: '', password: '' })
    let [loginError, setLoginError] = useState('')
    const handleChange = (event) => {
        let newVal = { ...adminCred }
        newVal[event.target.name] = event.target.value;
        setAdminCred(newVal)
    }
    const fetchToken = () => {
        let config = {
            method: 'POST',
            url: `${process.env.REACT_APP_URL}/admin/auth/login`,
            data: adminCred
          };
          axios(config)
            .then((res) => {
              console.log(res);
              setAuthInfo(res.data);
              history.push(`/admin`);
            })
            .catch((res) => {
                setLoginError('Username Or Password didn\'t match!')
                setTimeout(() => {
                    setLoginError('');
                },3000)
            });
    };
    return (
        <div className={'container'}>
            <div className={'row pt-2 ml-0 mr-0 '}>
                <div className={'col-6 offset-3 border p-5 mt-5'}>
                    <div className={'text-center h4'}>Login As Admin</div>
                    <div className={'mt-2'}>Username:
                    <input onChange={handleChange}
                            value={adminCred.username}
                            type={'text'}
                            placeholder={'Admin Username'}
                            name={'username'}
                            className={'form-control'} /></div>
                    <div className={'mt-2'}>Password:
                    <input onChange={handleChange}
                            value={adminCred.password}
                            type={'password'}
                            placeholder={'Admin Password'}
                            name={'password'}
                            className={'form-control'} /></div>
                    <div className={'text-danger'}>{loginError}</div>
                    <div className={'mt-2'}><button className={'btn btn-success'} onClick={fetchToken}>Sign In</button></div>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;