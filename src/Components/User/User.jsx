import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const user_id = useParams();
  return <>User:{user_id}</>;
};

export default User;
