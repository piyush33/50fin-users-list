import { useEffect, useState } from "react";
import AddNewUser from "./addNewUser";
import SearchUser from "./searchUser";
import UserData from "./userData";

const API = "https://jsonplaceholder.typicode.com/users";

const UserList = () => {
  const [feedData, setFeedData] = useState([]);
  const [masterFeedData, setMasterFeedData] = useState([]);

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setFeedData(data);
        setMasterFeedData(data);
      }
      console.log(feedData);
    } catch (e) {
      console.error(e);
    }
  };

  const updateAddedUser = (data) => {
    setMasterFeedData(data);
    setFeedData(data);
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);

  return (
    <>
      <div className="topBar" style={{ display: "flex", justifyContent: "space-between", padding: "30px 120px" }}>
        <AddNewUser setFeedData={updateAddedUser} feedData={masterFeedData} />
        <SearchUser setFeedData={setFeedData} feedData={masterFeedData} />
      </div>
      <table>
        <thead>
          <tr>
            <th>UserId</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone number </th>
          </tr>
        </thead>
        <tbody>
          <UserData feedData={feedData} />
        </tbody>
      </table>
    </>
  );
};

export default UserList;
