import React from "react";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  let navigate = useNavigate();

  return (
    <div className="nav">
      <div className="logo" onClick={() => navigate("/home")}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2991/2991106.png"
          width="35px"
          alt="logo"
        />
      </div>
      <h1>Document It</h1>
      <div>
        <span className="log">Logout</span>
      </div>
    </div>
  );
}
