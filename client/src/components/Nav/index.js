import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <ul className="nav navbar-nav">
        <li className="active"><a href="/home">Home</a></li>
        <li><a className="navbar-brand" href="/search">Search</a></li>
        <li><a className="navbar-brand" href="/saved">Saved</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
