import React from 'react';
import './Facilities.css';
const Facilities = () => {
  return (
    <div>
        <img className="hi"src="https://sunriseschool.edu.np/wp-content/uploads/2022/02/sfacilities.jpg" alt="" />
        <div className="facilities-container">
      <div className="facility-card">
        <img src="https://cdn3.vectorstock.com/i/thumb-large/59/02/font-design-for-word-library-with-many-books-in-vector-30435902.jpg" alt="Facility 1" className="facility-image"/>
        <h3 className="facility-title">Library</h3>
        <p className="facility-description">
          Our school library is well-equipped with a wide range of books and resources to support students' learning.
        </p>
      </div>
      <div className="facility-card">
        <img src="https://th.bing.com/th/id/OIP.Ygs9u5oy-quodq63uPzDhAAAAA?pid=ImgDet&w=420&h=420&rs=1" alt="Facility 2" className="facility-image"/>
        <h3 className="facility-title">Science Lab</h3>
        <p className="facility-description">
          Our state-of-the-art science lab provides students with hands-on learning experiences in various scientific disciplines.
        </p>
      </div>
      <div className="facility-card">
        <img src="https://www.vcbay.news/wp-content/uploads/2021/03/alt-1-420x420.jpg" alt="Facility 3" className="facility-image"/>
        <h3 className="facility-title">Sports Facilities</h3>
        <p className="facility-description">
          We offer a range of sports facilities including a sports field, gymnasium, and more for physical fitness and extracurricular activities.
        </p>
      </div>
    </div>
    </div>);};
export default Facilities;
