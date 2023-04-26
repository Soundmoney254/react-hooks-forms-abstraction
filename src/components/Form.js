import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    admin: false,
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
    let value = event.target.value;

    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }
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
        <input
      type="checkbox"
      name="admin"
      onChange={handleChange}
      checked={formData.admin}
      />

  <h2>{formData.firstName}  {formData.lastName}  {formData.admin}</h2>
    </form>
  );
}

export default Form;
