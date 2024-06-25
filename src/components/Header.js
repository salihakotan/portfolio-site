import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import profile from "../img/profile.png"
import vegan from "../img/ic1.png"
import cf from "../img/ic2.png"

function Header() {
  return (
    <Container className="header">

        <img className="profilePhoto" src={profile} alt="profilePhoto"/>

      <Heading>Saliha Kotan</Heading>

      <Box margin="20px auto auto auto" textAlign="center" display="flex" justifyContent="center" alignItems="center">
        <img width="40px" src={vegan} alt="vegan"/>
        <img style={{marginLeft:"10px"}} width="40px" src={cf} alt="crueltyFree"/>
      </Box>

      <nav>
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/aboutMe">About me</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}

export default Header;
