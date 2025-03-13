import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSuccess, fetchUsers, setSearchTerm } from "../Redux/actions";

function Home() {
  const dispatch = useDispatch();
  const { users, loading, error, searchTerm } = useSelector((state) => state);
  // console.log("State: ",users)

  useEffect(() => {
    dispatch(fetchUsers());
    console.log("fetched");
  }, [dispatch]);

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const filteredName = users.filter(
    (user) => user.name && user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log('searchTerm: ',searchTerm)
  console.log("FilteredName: ", filteredName);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <h1>Home</h1>
      <input
        value={searchTerm}
        onChange={handleSearchChange}
        type="text"
        placeholder="search.."
      />
      {/* <button onClick={}>Search</button> */}
      <div style={{ width: "18em", margin: "auto" }}>
        <ul>
          {filteredName.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
