import React, { useState } from "react";

var person = [
  { username: "user1", firstname: "firstname1" },
  { username: "user2", firstname: "firstname2" },
  { username: "user3", firstname: "firstname2" }
];

function SearchJSON() {
  const [value, setValue] = useState("");
  const [searched, setSearched] = useState("");

  const shoot = () => {
    for (var i in person) {
      if (value === person[i]["username"]) {
        setSearched(person[i]["username"]);
        break;
      } else {
        setSearched("ไม่พบ");
      }
    }
  };

  return (
    <div className="SearchJSON">
      <h2>SearchJSON</h2>
      <div>
        <input type="text" onChange={(e) => setValue(e.target.value)} />
        <button onClick={shoot}>show</button>
      </div>
      <h4>person: {searched}</h4>
    </div>
  );
}

export default SearchJSON;
