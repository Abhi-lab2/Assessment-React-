import React from "react";

export const Logout = () => {
  // Logout component, just log user out and take him to `/` homepage

  // suggestion: if you are storing anyting in redux it's a good idea to
  // empty it before loggin out. eg: order

  return (
    <>
      <h1>Welcome to Logout page</h1>
      <button>Logout</button>
    </>
  );
};
