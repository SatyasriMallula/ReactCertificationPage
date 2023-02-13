import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./users.module.css";

const User = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios.get(
        "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users"
      );
      setUsers(result.data);
      setFilteredUsers(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setFilteredUsers(
      users.filter((user) => {
        return `${user.fullName} `
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      })
    );
  };

  const handleReset = () => {
    setSearchTerm("");
    setFilteredUsers(users);
  };

  return (
    <div>
      <h1 id={styles.user}>Users</h1>
      <input
        id={styles.search}
        type="text"
        placeholder="Search by full Name in small case"
        value={searchTerm}
        onChange={handleSearch}
      />
      <button onClick={handleReset} id={styles.reset}>
        Reset
      </button>
      {searchTerm.length > 0 && searchTerm.length < 2 && (
        <div>Please enter at least 2 characters</div>
      )}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>User Avtar</th>
              <th>Full Name</th>
              <th>DoB</th>
              <th>Gender</th>
              <th>Current Location</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <img src={user.profilePic} alt="avtar"></img>
                </td>
                <td>{user.fullName}</td>
                <td>{user.dob}</td>
                <td>{user.gender}</td>
                <td>
                  {user.currentCity},{user.currentCountry}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default User;
