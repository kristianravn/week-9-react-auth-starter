import { useEffect, useState } from "react";


import UserCard from "./userCard/UserCard";

import "./UserContainer.css";
import { getAllUsersFetch } from "../../utils/fetch";

// eslint-disable-next-line react/prop-types
const UserContainer = ({ isLoggedIn }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      // change testUserEffect to getAllUsersFetch
      const data = await getAllUsersFetch();
      console.log(data);
      await setUsers(data.users);
    }

    fetchUsers();
  }, [isLoggedIn]);

  const testUseEffect = () => {
    console.log("useEffect in usercontainer is working");
    return {
      users: [
        { id: 1, username: "dave" },
        { id: 2, username: "jane" },
        { id: 3, username: "sarah" },
        { id: 4, username: "chris" },
        { id: 5, username: "horatio" },
        { id: 6, username: "jake" },
        { id: 7, username: "charlotte" },
        { id: 8, username: "jenny" },
        { id: 9, username: "john" },
        { id: 10, username: "alex" },
        { id: 11, username: "shaun" },
        { id: 12, username: "jamie" },
        { id: 13, username: "abid" },
        { id: 14, username: "jono" },
        { id: 15, username: "jo" },
        { id: 16, username: "julie" },
        { id: 17, username: "naomi" },
        { id: 18, username: "liz" },
      ],
    };
  };

  return (
    <div className="flex flex-column container">
      <div className="flex flex-row inner-container user-inner-container">
        {users.length >= 1 ? (
          users.map((user) => <UserCard user={user} key={user.id} />)
        ) : (
          <p>No users</p>
        )}
      </div>
    </div>
  );
};

export default UserContainer;
