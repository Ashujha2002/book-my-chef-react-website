import ImgLeftSubContainer from "../../assets/01gallery.png";
import ImgRightSubContainer from "../../assets/Picsart.png";
import Imgdecor from "../../assets/image.png";
import containerDecor1 from "../../assets/bg-131.png";
import containerDecor2 from "../../assets/bg-141.png";
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
      title: "5+ years of experience",
      decor: Imgdecor,
      heading: "A Team of Award-Winning Chefs",
      text: "Our chefs come from rich culinary backgrounds, many of them trained in India’s top hospitality schools and some with international exposure. From Michelin-inspired plating to authentic regional cooking, our team represents a wide spectrum of skills. Whether it is Mughlai, South Indian, Bengali, or modern fusion, our chefs bring creativity and passion to the plate. Over the years, we have been part of thousands of birthdays, anniversaries, weddings, and even intimate puja gatherings, making every occasion truly special.",
      btnText: "Meet Our Team",
    },
    {
      img: ImgRightSubContainer,
      title: "Custom Menus for Every Occasion",
      decor: Imgdecor,
      heading: "Dinner, Wedding or Corporate Party?",
      text: "We know every occasion demands something different — a wedding feast cannot be the same as a cozy dinner for two. That’s why our chefs collaborate with you to design menus based on your preferences, dietary requirements, and cultural traditions. Be it a lavish buffet for 500 guests or an elegant five-course meal for your anniversary, we ensure the same standard of excellence. Our services include live cooking counters, personalized menu planning, and even theme-based dining experiences tailored for Indian celebrations.",
      btnText: "Meet Our Team",
    },
  ];

  const ContentBlock = ({ title, decor, heading, text, btnText }) => (
    <div className="w-1/2 w-full md:w-1/2 py-2 md:py-15 flex flex-col items-center px-4 text-center">
      <p className="titleFont text-base sm:text-lg md:text-xl text-orange-500">
        {title}
      </p>
      <img className="w-16 sm:w-20 md:w-28" src={decor} />
      <p className="titleFont text-lg sm:text-xl text-center md:text-3xl my-5">
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
      <button className="border border-orange-500 p-2 mt-6 md:mt-10 cursor-pointer text-orange-500">
        {btnText}
      </button>
    </div>
  );
  return (
    <div className={`${styles.containerDecor} bg-black`}>
      {dataArr.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="w-1/2 w-full md:w-1/2">
            <img
              className="h-full w-full object-cover min-h-[260px]"
              src={item.img}
            />
          </div>
          <ContentBlock {...item} />
        </div>
      ))}
      <div className={`${styles.SubcontainerDecor1} hidden sm:block`}>
        <img src={containerDecor1} />
      </div>
      <div className={`${styles.SubcontainerDecor2} hidden sm:block`}>
        <img src={containerDecor2} />
      </div>
    </div>
  );
}

export default ThirdSection;
