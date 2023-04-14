import { useState } from "react";

const SearchUser = ({ feedData, setFeedData }) => {
  const [search, setSearch] = useState("");

  const searchKeyword = () => {
    let searchItem = feedData.filter((item) => {
      if (search === "") {
        return true;
      } else if (item.name.includes(search) || item.email.includes(search)) {
        return true;
      }
      return false;
    });
    setFeedData(searchItem);
    console.log("Searchitem", searchItem);
    console.log("Search", search);
    console.log("feedData", feedData);
  };

  return (
    <>
      <div className="searchContainer" style={{ display: "flex" }}>
        <input
          type="text"
          placeholder="Search name or email"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          style={{ width: "20vw" }}
        />
        <button onClick={searchKeyword}>Search</button>
      </div>
    </>
  );
};

export default SearchUser;
