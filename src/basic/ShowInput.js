import React, { useState } from "react";

function ShowInput() {
  const [value, setValue] = useState("");
  const [searched, setSearched] = useState("");

  return (
    <div className="ShowInput">
      <h2>ShowInput</h2>
      <div>
        <input type="text" onChange={(e) => setValue(e.target.value)} />
        <button onClick={() => setSearched(value)}>show</button>
      </div>
      <h4>show: {searched}</h4>
    </div>
  );
}

export default ShowInput;