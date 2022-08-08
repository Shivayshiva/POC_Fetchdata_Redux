import "./App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <div clasName="navbar">
        <div className="navitem" onClick={() => dispatch({ type: "todo" })}>
          ToDo List
        </div>
        <div className="navitem" onClick={() => dispatch({ type: "users" })}>
          User List
        </div>
        <div className="navitem" onClick={() => dispatch({ type: "comment" })}>
          Comments
        </div>
      </div>
      <br />
      <br />
      <br />

      {data}
    </>
  );
}

export default App;
