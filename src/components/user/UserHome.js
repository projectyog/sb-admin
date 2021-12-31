import React, { useState } from "react";
import userList from "../../UserData";
import UserListTable from "../user/UserList";
import AddUser from "../user/AddUser";
import EditUser from "../user/EditUser";
import "./userhome.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

const UserHome = () => {
  const [users, setUsers] = useState(userList);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const [editing, setEditing] = useState(false);

  const initialUser = { id: null, pic: " ", name: " " };

  const [currentUser, setCurrentUser] = useState(initialUser);

  const editUser = (id, user) => {
    setEditing(true);
    setCurrentUser(user);
  };

  const updateUser = (newUser) => {
    setUsers(
      users.map((user) => (user.id === currentUser.id ? newUser : user))
    );
    setCurrentUser(initialUser);
    setEditing(false);
  };

  return (
    <div className="container">
      <h1>User Component</h1>
      <div className="row">
        <div className="container">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUser
                currentUser={currentUser}
                setEditing={setEditing}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUser addUser={addUser} />
            </div>
          )}
        </div>
        <div className="container">
          <h2>View users</h2>
          <UserListTable
            users={users}
            deleteUser={deleteUser}
            editUser={editUser}
          />
        </div>
      </div>
    </div>
  );
};

export default UserHome;