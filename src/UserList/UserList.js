import React, { useState, useEffect } from "react";
import axios from "axios";


const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/users");
      setListOfUsers(result.data);
    };
    fetchData();
  }, [  ]);

  return (
    <div >
      <h1 >List of Users</h1>
     {/*  <ul > 
        {listOfUsers.map((user) => (
          <h5 class="card-title">{user.name}</h5>
         // ,<h2 key={user.id}>{user.email}</h2>
        
        ))}
      </ul> */}
      <ul > 
        {listOfUsers.map((user) => (
          <div class="card-body">
          
          <h6 class="card-subtitle mb-2 text-muted">{user.name}</h6>
          <p class="card-text">{user.email}</p>
     
        </div>
        ))}
      </ul>
      
    </div>
  );
};

export default UserList;
