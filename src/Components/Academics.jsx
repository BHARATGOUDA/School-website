
import React from 'react';
import './Academics.css'; 

const Academics = () => {
  return (
    <div className="academics-container">
    <img src="https://www.flearningstudio.com/wp-content/uploads/2017/08/animation-for-educational-purposes.jpg" alt="" />
      <h1 className="academics-heading">School Academics</h1>
        <div className="academics-content">
            <ul>
            <li className="custombutton">Mathematics</li>
            <li className="custombutton">Science</li>
            <li className="custombutton">Literature</li>
            <li className="custombutton">History</li>
            <li className="custombutton">Arts and Music</li>
            <li className="custombutton">Physical Education</li>
            </ul>
      </div>
    </div>
  );
}

export default Academics;
