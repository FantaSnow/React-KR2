import React, { useState } from "react";
import { deleteUser } from "../../../utils/apiMethods";
import Loading from "./Loading";

const DeleteButton = ({ userId, onDelete }) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await deleteUser(id);
      onDelete(id);
    } catch (error) {
      console.error("Error deleting user:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <Loading message="Deleting..." />
      ) : (
        <button onClick={() => handleDelete(userId)}>Delete</button>
      )}
    </div>
  );
};

export default DeleteButton;
