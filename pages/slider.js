import React from "react";
import styles from "../styles/Slider.module.css";
import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export const CarouselItem = ({children, width})=>{
    return(
      <div className={styles.item} style={{width:width}}>
        {children}
      </div>
    )
}

const Slider = ({children}) => {
  const [translateVal, setTranslateVal] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const { height, width } = useWindowDimensions();

  function ButtonClicked(button, callback){

    if(button == "right" && translateVal > -width*.75 ){
      callback(translateVal - width/4);
    }
    if(button == "left"&& translateVal < 0){
      callback(translateVal + width/4);
    }
  }
  return (
    <>
    <button style={{fontSize: "100px", backgroundColor: "rgba(0,0,0,0)", borderRadius: "10px"}}
      onClick={()=>ButtonClicked("left", (val)=>setTranslateVal(val))}
    >
    {"<"}
  </button>
    <div className={styles.carousel}>
      <div className={styles.inner} style={{transform: 'translate('+translateVal+'px, 0px)'}}>
        {React.Children.map(children, (child, index)=>{
          return React.cloneElement(child, {width:"100%"})
        })}
      </div>
    </div>
    <button style={{fontSize: "100px", backgroundColor: "rgba(0,0,0,0)", borderRadius: "10px"}}
      onClick={()=>ButtonClicked("right", (val)=>setTranslateVal(val))}
    >
    {">"}
  </button>
  </>
  )
}

export default Slider;
