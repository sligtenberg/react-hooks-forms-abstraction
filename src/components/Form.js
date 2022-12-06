import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
  });

  function handleChange(event) {
    // name is the KEY in the formData object we're trying to update
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
    </form>
  );
}

export default Form;
