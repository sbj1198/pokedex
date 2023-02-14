import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-flex">
        <li>
          <Link to="/pokemon" className="link" style={{ color: "white" }}>
            Pokemon
          </Link>
        </li>
        <li>
          <Link to="/types" className="link" style={{ color: "white" }}>
            Types
          </Link>
        </li>
        <li>
          <Link to="/favorites" className="link" style={{ color: "white" }}>
            Favorites
          </Link>
        </li>
      </ul>
    </div>
  );
};
