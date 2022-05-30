import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { database } from "./firebaseConfig";
import Editor from "./components/Editor";
import "./styles.css";
import Login from "./components/Login";
import Nav from "./components/Navbar";

export default function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home database={database} />} />
        <Route path="/editor/:id" element={<Editor database={database} />} />
      </Routes>
    </div>
  );
}
