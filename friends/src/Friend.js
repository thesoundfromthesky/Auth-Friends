import React from "react";

// {
//     id: 1
//     name: 'Joe',
//     age: 24,
//     email: 'joe@lambdaschool.com',
// }
export default function Friend({ friend }) {
  const { name, age, email } = friend;
  return (
    <div className="friend">
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Email: {email}</div>
    </div>
  );
}
