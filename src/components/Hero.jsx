import React from "react";
import Robot from "../assets/Robot.json";
import Resume from "../assets/Resume.pdf";
import Lottie from "lottie-react";
import { TypingText } from "typing-text-animation";

function Hero() {
  return (
    <div
      className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4"
      id="home"
    >
      <div className="flex flex-col justify-center align-middle px-6 md:px-10 gap-4">
        <h2 className="text-2xl md:text-6xl text-center md:text-left text-orange-400">
          B.E. SANJAYKUMAR RENGARAJU
        </h2>
        <h4 className="text-2xl md:text-4xl text-center md:text-left text-orange-400">
          MECHATRONICS ENGINEERING
        </h4>
        <div className="text-2xl md:text-4xl text-center md:text-left text-orange-400">
          <TypingText
            text={["MERN Stack Developer", "ML Engineer", "UI Designer"]}
          />
        </div>
        <p className="text-sm md:text-xl text-center md:text-left capitalize text-orange-400">
          A fresher candidate with strong programming skills and good experience
          in developing web applications.
        </p>
        <div className="flex gap-4 justify-center align-middle md:justify-start">
          <a
            href="https://www.linkedin.com/in/sanjaykumar-rengaraju/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
              alt="linkedin"
              className="w-6 hover:-translate-y-1"
            />
          </a>
          <a
            href="https://github.com/Sanjaykumar-rengaraju"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"
              alt="Github"
              className="w-6 hover:-translate-y-1"
            />
          </a>
          <a
            href="https://leetcode.com/u/sanjaykumarrengaraju/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.iconscout.com/icon/free/png-512/leetcode-3628885-3030025.png"
              alt="Leetcode"
              className="w-6 hover:-translate-y-1"
            />
          </a>
          <button className="bg-orange-400 text-white border-solid border-red-600 border-2 px-4 rounded-full tracking-widest hover:bg-orange-600 hover:text-black">
            <a href={Resume} download>
              Download CV
            </a>
          </button>
        </div>
      </div>
      <div className="order-first">
        <Lottie animationData={Robot} />
      </div>
    </div>
  );
}

export default Hero;
