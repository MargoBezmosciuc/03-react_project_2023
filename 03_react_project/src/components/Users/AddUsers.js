import React from "react";

const AddUsers = (props) => {
  const addUserHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Write your Name</label>
      <input id="username" type="text" placeholder="Your Name" />
      <label htmlFor="age">Write your Age</label>
      <input id="age" type="number" placeholder="Age" />
      <button type="submit"> Add User</button>
    </form>
  );
};

export default AddUsers;
