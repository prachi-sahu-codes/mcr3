import "./App.css";
import { NavLink, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

const navStyles = ({ isActive }) => ({
  color: isActive ? "#432818" : "#99582a",
  textDecoration: isActive ? "underline" : "none",
  fontWeight: 600,
  fontSize: "1.5rem",
  padding: "1rem",
});

function App() {
  return (
    <div className="App">
      <nav className="nav-bar">
        <NavLink to="/" style={navStyles}>
          Home
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
