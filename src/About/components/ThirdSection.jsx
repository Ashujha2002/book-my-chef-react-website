import ImgLeftSubContainer from "../../assets/01_gallery-3.jpg (1).png";
import ImgRightSubContainer from "../../assets/Picsart_25-05-30_23-20-06-898.png";
import Imgdecor from "../../assets/preview2.png";
import containerDecor1 from "../../assets/bg-13 1.png";
import containerDecor2 from "../../assets/bg-14 1.png";
import styles from "../styles/aboutUs.module.css";
import { useState, useEffect } from "react";

function ThirdSection() {
  const [windowSize, setWindowSize] = useState({
    windowWidth: 0,
    windowHeight: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dataArr = [
    {
      img: ImgLeftSubContainer,
      title: "35 years of experience",
      decor: Imgdecor,
      heading: "Award winning chef",
      text: "Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a gallery of type.",
      btnText: "Meet Our Team",
    },
    {
      img: ImgRightSubContainer,
      title: "35 years of experience",
      decor: Imgdecor,
      heading: "Dinner, Event or Party?",
      text: "Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a gallery of type.",
      btnText: "Meet Our Team",
    },
  ];

  const ContentBlock = ({ title, decor, heading, text, btnText }) => (
    <div className="w-1/2 py-2 md:py-15 flex flex-col items-center">
      <p className="titleFont text-lg md:text-xl text-orange-500">{title}</p>
      <img src={decor} />
      <p className="titleFont text-xl text-center md:text-3xl my-5">
        {heading}
      </p>
      <p className="w-9/10 text-center my-5">
        {windowSize.windowWidth <= 768
          ? text
              .split(/[ ,.!?]/)
              .slice(0, 10)
              .join(" ") + "..."
          : text}
      </p>
      <button className="border border-orange-500 p-2 mt-10 cursor-pointer text-orange-500">
        {btnText}
      </button>
    </div>
  );
  return (
    <div className={`${styles.containerDecor} bg-black`}>
      {dataArr.map((item, index) => (
        <div
          key={index}
          className={`flex ${index !== 0 ? "flex-row-reverse" : ""}`}
        >
          <div className="w-1/2">
            <img className="h-full" src={item.img} />
          </div>
          <ContentBlock {...item} />
        </div>
      ))}
      <div className={styles.SubcontainerDecor1}>
        <img src={containerDecor1} />
      </div>
      <div className={styles.SubcontainerDecor2}>
        <img src={containerDecor2} />
      </div>
    </div>
  );
}

export default ThirdSection;
