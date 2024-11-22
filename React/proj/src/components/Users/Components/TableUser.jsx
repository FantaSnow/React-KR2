import React from "react";
import DeleteButton from "./DeleteButton";

const TableUser = ({ userList, onDeleteUser }) => {
  return (
    <div className="container">
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                {user.first_name} {user.last_name}
              </td>
              <td>{user.email}</td>
              <td>
                <img
                  src={user.image}
                  alt="User Avatar"
                  width="50"
                  height="50"
                />
              </td>
              <td>
                <DeleteButton userId={user.id} onDelete={onDeleteUser} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableUser;
