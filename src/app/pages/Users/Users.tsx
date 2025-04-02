import React from "react";
import { Content } from "./../../../_metronic/layout/components/content";
import UserList from "./UserList/UserList.tsx";
import UsersListHeader from "./UsersListHeader/UsersListHeader.tsx";

function Users() {
  return (
    <>
      <Content>
        <div className={`card mb-5 mb-xl-8`}>
          <UsersListHeader />
          <UserList />
        </div>
      </Content>
    </>
  );
}

export default Users;
