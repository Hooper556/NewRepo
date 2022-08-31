import React, { Component } from "react";
import { Link } from "react-scroll";

export default class header extends Component {
  render() {
    return (
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          justifyContent: "flex-end",

          padding: "15px 0px",
          backgroundColor: "#4D4D4D",
          margin: "0px 0px",
        }}
      >
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            style={{
              width: "100px",
              padding: "15px 35px",
              cursor: "pointer",
              color: "white",
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            style={{
              width: "100px",
              padding: "15px 35px",
              cursor: "pointer",
              color: "white",
            }}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            style={{
              width: "100px",
              padding: "15px 35px",
              cursor: "pointer",
              color: "white",
            }}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            style={{
              width: "100px",
              padding: "15px 35px",
              cursor: "pointer",
              color: "white",
            }}
          >
            Contact
          </Link>
        </li>
      </ul>
    );
  }
}
