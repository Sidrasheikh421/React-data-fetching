import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import BusinessCard from "./Components/BusinessCard";

const App = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {

    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

  }, []);

 
  return (
    <div className="min-h-screen bg-purple-50">

      <nav className="bg-purple-700 text-white p-5">
        <h1 className="text-2xl font-bold">
          Business Cards
        </h1>
      </nav>

      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-purple-800">
          Our Business Cards
        </h1>

        <p className="text-gray-600 mt-3">
          Explore Our Professional Profiles
        </p>
      </div>

      {loading ? (
        <p className="text-center text-xl">
          Loading...
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">

          {users.map((user) => (
            <BusinessCard
              key={user.id}
              user={user}
            />
          ))}

        </div>
      )}

    </div>
  );
}

export default App;