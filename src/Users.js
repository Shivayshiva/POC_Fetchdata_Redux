import React, { useState, useEffect } from "react";
import "./Users.css";

const Users = () => {
  const [state2, setstate2] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchdata = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setstate2(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchdata();
    console.log(state2.title);
  }, []);

  return loading ? (
    <h3>Loading...</h3>
  ) : (
    <table>
      <tr>
        <th>Name</th>
        <th>UserName</th>
        <th>Email</th>
        <th>Address</th>
        <th>Website</th>
        <th>Company</th>
      </tr>

      {state2.map((val) => (
        <tr key={val.id}>
          <td>{val.name}</td>
          <td>{val.username}</td>
          <td>{val.email}</td>
          <td>
            <div>{val.address.street}</div>
            <div>{val.address.city}</div>
            <div>{val.address.zipcode}</div>
          </td>
          <td>{val.website}</td>
          <td>
            <div>Company Name:- {val.company.name}</div>
            <div>Phrase :- {val.company.catchPhrase}</div>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default Users;
