import React from "react";
import duo from "../assets/duostats_img.png";
import lee from "../assets/leetstats_img.png";

function Progress() {
  return (
    <div id="progress" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-4xl md:text-6xl text-orange-400 font-semibold mb-12 text-center">
        Progress
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8  items-stretch justify-items-center">
        <ProgressCard
          image={lee}
          title="496 Problems Solved, 277 Days Streak"
        />

        <ProgressCard
          image={duo}
          title="500 Days Streak, German, Hindi, Japanese"
        />
      </div>
    </div>
  );
}

const ProgressCard = ({ image, title }) => (
  <div className="max-w-md rounded-lg overflow-hidden shadow-lg bg-orange-300">
    <div className="aspect-w-16 aspect-h-9">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    </div>
  </div>
);

export default Progress;
