import React, { useState, useEffect } from "react";
import TableUser from "./Components/TableUser";
import Loading from "./Components/Loading";
import { getUsers } from "../../utils/apiMethods";

const UserIndex = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const data = await getUsers();
      setUserList(data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = (userId) => {
    setUserList((prevList) => prevList.filter((user) => user.id !== userId));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h1>User Management</h1>
      {loading ? (
        <Loading message="Fetching users..." />
      ) : (
        <TableUser userList={userList} onDeleteUser={handleDeleteUser} />
      )}
      <button onClick={fetchUser} disabled={loading}>
        {loading ? "Fetching..." : "Fetch Data"}
      </button>
    </div>
  );
};

export default UserIndex;
