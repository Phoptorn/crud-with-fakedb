import React, { useState, useEffect } from "react";


const UserGet = () => {
  const [data, setData] = useState([]);
  const newData = data;
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost/FakeDB");
      const json = await res.json();
      setData(json);
    }
    fetchData();
  }
  , []);

  const buttonClick = () => {
    setShowData(!showData);
  }

  return (
    <div className="UserGet">
      <h2>Get All Users</h2>
      <ul>
      {newData.map(item => {
        return showData ? (
          <div key={item.id}>
            {item.firstname} {item.lastname}
          </div>
        ) : (
          ""
        );
      })}
      </ul>
      <button onClick={buttonClick}>Get</button>
    </div>
  );
}
 
 export default UserGet;
