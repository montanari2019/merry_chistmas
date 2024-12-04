import { useEffect, useState } from "react";
import styled from "./styled.module.css"
import { felizNatalArray } from "../../utils/utils";

export function Titles(){
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIsVisible(false);
        setTimeout(() => {
          setCurrentIndex(
            (prevIndex) => (prevIndex + 1) % felizNatalArray.length
          );
          setIsVisible(true);
        }, 1000);
      }, 5000);
      return () => clearInterval(interval);
    }, []);
    return (
        <div className={styled.sectionCenter}>
        <h1
          className={`${styled.title} ${
            isVisible ? styled.fadeIn : styled.fadeOut
          }`}
        >
          {felizNatalArray[currentIndex].title}
        </h1>

        <div  className={`${styled.paragraph} ${
            isVisible ? styled.fadeIn : styled.fadeOut
          }`}>
          <p>Idioma</p>
          <strong>{felizNatalArray[currentIndex].idioma}</strong>
        </div>
      </div>
    )
}