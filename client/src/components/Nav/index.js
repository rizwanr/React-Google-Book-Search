import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <ul className="nav navbar-nav">
        <li><a className="navbar-brand" href="/search">Search</a></li>
        <li><a className="navbar-brand" href="/saved">Saved</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
