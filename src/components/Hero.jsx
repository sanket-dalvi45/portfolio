import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import yourImage from '../assets/Sanket.jpg';

function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="intro">Hello, I’m <span>Sanket Dalvi</span></p>
        <h1>Computer Engineering Student & Web Developer</h1>
        <p className="desc">
          Computer Engineering student with knowledge of backend and frontend technologies. Experienced in
          building web applications and solving problems efficiently. Works well in teams and enjoys collaborating
          on projects.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">See My Work</a>
          <a href="/Sanket_Dalvi_sanketdalvi1010@gmail.com.pdf" download className="btn secondary">Download CV</a>
        </div>
      </motion.div>

      <motion.div
        className="hero-right"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="profile-circle">
          <img src={yourImage} alt="Sanket Dalvi" />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
