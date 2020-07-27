import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';




function Home() {
  return (
    <div>

      <div className={'row ml-0 mr-0 mt-5'} style={{ 'min-height': '300px' }}>
        <div className={'col-4 offset-2 border'}>
          <div className={'text-center h4 mt-2'}>Student Panel</div><hr></hr>
          <div className={'text-center'}>Give test and get evaluated instantly!</div><hr></hr>
          <div style={{ 'margin-top': '100px' }} className={'text-center'}><Link to={`/courses`}><h5> Click Here! </h5></Link></div>
        </div>
        <div className={'col-4 border offset-1'}>
          <div className={'text-center h4 mt-2'}>Admin Panel</div><hr></hr>
          <div className={'text-center'}>Setup Courses, Lessons and Questions!</div><hr></hr>
          <div style={{ 'margin-top': '100px' }} className={'text-center'}><Link to={`/admin`}><h5> Click Here! </h5></Link></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
