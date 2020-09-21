import React from "react";
import { authService } from "fbase";

const Profile = () => <span>Profile</span>;

export default () => {
  const onLogOutClick = () => authService.signOut();
  return (
    <>
      <button onClick={onLogOutClick}>Log out</button>
    </>
  );
};
