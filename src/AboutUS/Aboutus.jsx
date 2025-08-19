import React from "react";
import Hero from "./Hero Section/Hero";
import bgImg from "../assets/AboutHero.jpg";

const Aboutus = () => {
  return (
    <>
      <Hero Heading="About US" AboveHead="Our Story" imageUrl={bgImg} />
    </>
  );
};

export default Aboutus;
