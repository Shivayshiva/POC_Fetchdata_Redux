import React, { useState, useEffect } from "react";
import "./Todo.css";

const Todo = () => {
  const [state1, setstate1] = useState([]);

  const fetchdata = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setstate1(data));
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <table>
      <tr>
        <th>UserID</th>
        <th>Title</th>
        <th>Completed</th>
      </tr>

      {state1.map((val) => (
        <tr key={val.id}>
          <td>{val.userId}</td>
          <td>{val.title}</td>
          <td>{val.completed ? "Completed" : "Not Completed"}</td>
        </tr>
      ))}
    </table>
  );
};

export default Todo;
