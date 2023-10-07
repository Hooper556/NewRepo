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
            width: "50%",
            flexDirection: "row",
            justifyContent: "flex-end",
            display: "flex",
            height: "100%",
            alignItems: "center",
            paddingTop: "20px",
          }}
        ></div>
      </ul>
    );
  }
}
