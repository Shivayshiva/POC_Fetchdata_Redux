import React, { useState, useEffect } from "react";
import "./Comments.css";

const Comment = () => {
  const [state3, setstate3] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchdata = () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => {
        setstate3(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchdata();
  });

  return loading ? (
    <h3>Loading....</h3>
  ) : (
    <table>
      <tr>
        <th>UserID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Comment</th>
      </tr>

      {state3.map((val) => (
        <tr key={val.id}>
          <td>{val.id}</td>
          <td>{val.name}</td>
          <td>{val.email}</td>
          <td>{val.body}</td>
        </tr>
      ))}
    </table>
  );
};

export default Comment;
