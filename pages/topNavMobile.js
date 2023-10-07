import React, { Component } from "react";
import Image from "next/image";

export default class MobileHeader extends Component {
  render() {
    return (
      <ul
        style={{
          display: "flex",
          justifyContent: "flex-start",
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
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "25px",
              height: "25px",
              borderRadius: 5,
              marginRight: "10px",
            }}
          />
          <h2 style={{ fontSize: "14px" }}>Keen Betting</h2>
        </div>
      </ul>
    );
  }
}
