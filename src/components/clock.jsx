import React from "react";

const Clock = ({ time }) => {
  return <p className="clock">{time.toLocaleTimeString()}</p>;
};

export default Clock;
