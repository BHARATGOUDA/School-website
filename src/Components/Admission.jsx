import React, { useState } from 'react';
import axios from 'axios';
import './Admission.css';
function StudentForm() {
  const [formData, setFormData] = useState({
    Photo: '',
    First_Name: '',
    Middle_Name: '',
    Surname: '',
    Birthday: '',
    Class: '',
    Phone: '',
    email: '',
    Set_Password: '',
    Password_Confirmation: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/Admin', formData);
      alert('Student data submitted successfully');
    } catch (error) {
      console.error(error);
      alert('Error submitting student data');
    }
  };
  return (
    <div className="hi">
        <div className="student-form-container">
            <h1>Student Admission Form Request</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="photo">Student Photo:</label>
                <input type="file" id="photo" name="Photo" onChange={handleChange} />
                </div>
                <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="First_Name" value={formData.First_Name} onChange={handleChange} />
                </div>
                <div className="form-group">
                <label htmlFor="middleName">Middle Name:</label>
                <input type="text" id="middleName" name="Middle_Name" value={formData.Middle_Name} onChange={handleChange} />
                </div>
                <div className="form-group">
                <label htmlFor="surname">Surname:</label>
                <input type="text" id="surname" name="Surname" value={formData.Surname} onChange={handleChange} />
                </div>
                <div className="form-group">
                <label htmlFor="birthday">Birthday:</label>
                <input type="date" id="birthday" name="Birthday" value={formData.Birthday} onChange={handleChange} />
                </div>
                <div className="form-group">
                <label htmlFor="class">Class:</label>
                <input type="text" id="class" name="Class" value={formData.Class} onChange={handleChange} />
                </div>
                <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="Phone" value={formData.Phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                <label htmlFor="password">Set Password:</label>
                <input type="password" id="password" name="Set_Password" value={formData.Set_Password} onChange={handleChange} />
                </div>
                <div className="form-group">
                <label htmlFor="passwordConfirmation">Password Confirmation:</label>
                <input type="password" id="passwordConfirmation" name="Password_Confirmation" value={formData.Password_Confirmation} onChange={handleChange} />
                </div>
                <div className="form-group">
                <button type="submit">Submit</button>
                </div>
            </form>
            </div>
    </div>
   
  );
}

export default StudentForm;
