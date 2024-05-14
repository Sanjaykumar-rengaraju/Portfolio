import React from "react";
import books from "../assets/books.json";
import Lottie from "lottie-react";

function Education() {
  return (
    <div id="education" className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center text-4xl md:text-6xl text-orange-400 font-semibold mb-12">
        EDUCATION
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center">
        <div className="px-12 flex flex-col gap-12">
          <div className="">
            <h2 className="text-2xl md:text-4xl text-orange-400 tracking-widest">
              Kongu Engineering College, Erode
            </h2>
            <h3 className="text-xl md:text-3xl text-orange-400 tracking-wider">
              CGPA : 8.58
            </h3>
            <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-orange-400"
                style={{ width: "85.8%" }}
              ></div>
            </div>
            <h4 className="text-lg md:text-2xl text-orange-400 tracking-wider">
              2021 - 2025
            </h4>
          </div>
          <div>
            <h2 className="text-2xl md:text-4xl text-orange-400 tracking-widest">
              Raj Vidya Bhavan Matric Hr Sec School, Trichy
            </h2>
            <h3 className="text-xl md:text-3xl text-orange-400 tracking-wider">
              HSC : 92.3%
            </h3>
            <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-orange-400"
                style={{ width: "92.3%" }}
              ></div>
            </div>
            <h3 className="text-xl md:text-3xl text-orange-400 tracking-wider">
              SSLC : 91.6%
            </h3>
            <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-orange-400"
                style={{ width: "91.6%" }}
              ></div>
            </div>
            <h4 className="text-lg md:text-2xl text-orange-400 tracking-wider">
              2019 - 2021
            </h4>
          </div>
        </div>
        <div className="order-first md:order-last" style={{ width: "18rem" }}>
          <Lottie animationData={books} loop={true} autoplay />
        </div>
      </div>
    </div>
  );
}

export default Education;
