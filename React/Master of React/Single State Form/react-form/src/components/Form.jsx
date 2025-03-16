import { useState } from "react";

const Form = () => {
  // Single state object for all form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle input changes using a callback function
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div style={{ textAlign: "center", maxWidth: "400px", margin: "auto" }}>
      <h2>Single State Form</h2>
      
      {/* Form Inputs */}
      <input 
        type="text" 
        name="firstName" 
        placeholder="First Name" 
        value={formData.firstName} 
        onChange={handleChange} 
      /><br /><br />

      <input 
        type="text" 
        name="lastName" 
        placeholder="Last Name" 
        value={formData.lastName} 
        onChange={handleChange} 
      /><br /><br />

      <input 
        type="email" 
        name="email" 
        placeholder="Email" 
        value={formData.email} 
        onChange={handleChange} 
      /><br /><br />

      <input 
        type="password" 
        name="password" 
        placeholder="Password" 
        value={formData.password} 
        onChange={handleChange} 
      /><br /><br />

      <input 
        type="password" 
        name="confirmPassword" 
        placeholder="Confirm Password" 
        value={formData.confirmPassword} 
        onChange={handleChange} 
      /><br /><br />

      {/* Display Real-Time Form Data */}
      <h3>Your Form Data</h3>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Email: {formData.email}</p>
      <p>Password: {formData.password}</p>
      <p>Confirm Password: {formData.confirmPassword}</p>
    </div>
  );
};

export default Form;