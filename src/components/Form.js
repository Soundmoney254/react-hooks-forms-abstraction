import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  // function handleFirstNameChange(event) {
  //   setFormData({
  //     ...formData,
  //     firstName: event.target.value,
  //   });
  // }

  // function handleLastNameChange(event) {
  //   setFormData({
  //     ...formData,
  //     lastName: event.target.value,
  //   });
  // }


  function handleChange(event) {
    // name is the KEY in of the formData object we're trying to update
    const name = event.target.name;
    const value = event.target.value;
  
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <form>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />

  <h2>{formData.firstName}  {formData.lastName}</h2>
    </form>
  );
}

export default Form;
