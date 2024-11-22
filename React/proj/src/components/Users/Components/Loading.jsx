import React from "react";

const Loading = ({ message = "Loading..." }) => {
  return (
    <div style={{ textAlign: "center", padding: "10px" }}>
      <span>{message}</span>
    </div>
  );
};

export default Loading;
