import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Bar = (props) => {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="name"
          placeholder="Search"
          defaultValue={name}
          onChange={(e) => props.search(e.target.value)}
        />
      </form>
    </div>
  );
};
