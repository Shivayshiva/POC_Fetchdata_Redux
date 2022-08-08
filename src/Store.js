import Comments from "./Comments.js";
import Todo from "./Todo.js";
import Users from "./Users.js";
const redux = require("redux");

let datastate = <Comments />;
const reducer = (state = datastate, action) => {
  switch (action.type) {
    case "comment":
      return <Comments />;
    case "todo":
      return <Todo />;

    case "users":
      return <Users />;
    default:
      return <Comments />;
  }
};

export const store = redux.createStore(reducer);
