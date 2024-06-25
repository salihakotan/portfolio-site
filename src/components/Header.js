import { Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Heading as="h1">Xx</Heading>

      <nav>
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Blog</Link>
          </li>
          <li>
            <Link to="/">About me</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
