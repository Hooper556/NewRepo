import React from "react";
import ReactDOM from "react-dom";
import styles from "../styles/Slider.module.css";

export const data = [
  {
    name: "simon",
    img: "https://imgur.com/c43aAlv.jpg",
  },
  {
    name: "neo",
    img: "https://imgur.com/RF2a3PB.jpg",
  },
  {
    name: "morpheus",
    img: "https://imgur.com/B0SNpZI.jpg",
  },
  {
    name: "trinity",
    img: "https://imgur.com/KnXHM0K.jpg",
  },
];
const Card = ({ name, img }) => {
  return (
    <div className={styles.Card}>
      <img src={img} alt={name} />
      <h2>{name}</h2>
    </div>
  );
};

const CardContainer = () => (
  <div className={styles.cardsContainer}>
    {data.map((person) => {
      return <Card {...person} />;
    })}
  </div>
);

class Slider extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <CardContainer />
      </div>
    );
  }
}

export default Slider;
