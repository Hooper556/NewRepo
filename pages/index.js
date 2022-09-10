import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./topNav";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import Loader from "./loader";
import Desktop from "./desktop";
import Mobile from "./mobile";

export default function Home() {
  const [isBusy, setIsBusy] = useState(true);
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(10);

  var viewportWidth = null;
  var viewportHeight = null;

  useEffect(() => {
    viewportWidth = window.innerWidth;
    viewportHeight = window.innerHeight;
    setWidth(viewportWidth);
    setHeight(viewportHeight);
    setIsBusy(false);
  }, []);

  if (isBusy === true) {
    return <Loader />;
  } else {
    if (width >= 600) {
      return <Desktop />;
    } else {
      return <Mobile width={width} height={height} />;
    }
  }
}
