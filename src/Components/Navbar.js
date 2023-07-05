import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/imdb.png";
import wish from "../images/wishlist.png";
import "./Navbar.css";
export default class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <Link to="/" className="logo">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "100px", height: "auto" }}
          />
        </Link>
        <Link to="/favourites" className="wishlist">
          <img
            src={wish}
            alt="Wishlist"
            style={{ width: "40px", height: "auto" }}
          />
        </Link>

      </div>
    );
  }
}
