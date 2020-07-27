import React, { useEffect,useState } from 'react';
import {Link} from 'react-router-dom';




function Home() {
  return (
    <div>
        <Link to={`/courses`}><h1 > For Student </h1></Link> 
        <Link to={`/admin`}><h1 > For Admin </h1></Link> 
    </div>
  );
}

export default Home;
