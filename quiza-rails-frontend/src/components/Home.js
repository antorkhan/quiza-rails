import React, { useEffect,useState } from 'react';
import {Link} from 'react-router-dom';
require('dotenv').config({path: './.env.'+process.env.NODE_ENV});



function Home() {
  return (
    <div>
        This is home
        {process.env.REACT_APP_URL}
        {`./.env.${process.env.NODE_ENV}`}
        <Link to={`/courses`}><h1 > For Student </h1></Link> 
        <Link to={`/admin`}><h1 > For Admin </h1></Link> 
    </div>
  );
}

export default Home;
