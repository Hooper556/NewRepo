import React, { Component } from "react";
import Image from "next/image";
import { Link } from "react-scroll";

export default class header extends Component {
  render() {
    return (
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          justifyContent: "space-between",
          zIndex: 5,
          backgroundColor: "#3FA0EF",
          margin: "0px 0px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src="/KeenIcon.png"
            alt="Profilepic"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: 10,
              marginRight: "10px",
            }}
          />
          <h2>Keen Betting</h2>
        </div>

        <div
          style={{
            width: "30%",
            flexDirection: "row",
            justifyContent: "flex-end",
            display: "flex",
            height: "100%",
            alignItems: "center",
            paddingTop: "25px",
          }}
        >
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              style={{
                alignContent: "center",
                justifyContent: "center",
                width: "100px",
                height: "100%",
                padding: "25px 35px",
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
              to="code"
              spy={true}
              smooth={true}
              style={{
                width: "100px",
                padding: "15px 35px",
                cursor: "pointer",
                color: "white",
              }}
            >
              Code
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
        </div>
      </ul>
    );
  }
}
