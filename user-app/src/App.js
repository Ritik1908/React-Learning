import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UsersList";

function App() {
  const [userList, setUserList] = useState([]);
  const users = [];

  const userListHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { id: Math.random(), name: uName, age: uAge }];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={userListHandler} />
      <UserList users={userList} />
    </Fragment>
  );
}

export default App;
