import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-flex">
        <li>
          <Link to="/pokemon" className="link">
            Pokemon
          </Link>
        </li>
        <li>
          <Link to="/types" className="link">
            Types
          </Link>
        </li>
        <li>
          <Link to="/favorites" className="link">
            Favorites
          </Link>
        </li>
      </ul>
    </div>
  );
};
