import React from "react";

function Skills() {
  return (
    <div id="skills" className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center text-4xl md:text-6xl text-orange-400 font-semibold mb-12">
        SKILLS
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center items-center">
        <SkillItem
          src="https://cdn-icons-png.flaticon.com/128/1051/1051277.png"
          alt="HTML"
        />
        <SkillItem
          src="https://cdn-icons-png.flaticon.com/128/732/732190.png"
          alt="CSS"
        />
        <SkillItem
          src="https://cdn-icons-png.flaticon.com/128/721/721791.png"
          alt="JavaScript"
        />
        <SkillItem
          src="https://cdn-icons-png.flaticon.com/128/1126/1126012.png"
          alt="React"
        />
        <SkillItem
          src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png"
          alt="MongoDB"
        />
        <SkillItem
          src="https://cdn-icons-png.flaticon.com/128/15380/15380914.png"
          alt="Node.js"
        />
        <SkillItem
          src="https://img.icons8.com/?size=50&id=kg46nzoJrmTR&format=png"
          alt="Express.js"
        />
        <SkillItem
          src="https://img.icons8.com/?size=50&id=GflC6KLkdd0Y&format=png"
          alt="Figma"
        />
        <SkillItem
          src="https://img.icons8.com/?size=50&id=DYjckUr8cF8H&format=png"
          alt="Sass"
        />
        <SkillItem
          src="https://img.icons8.com/?size=80&id=WoopfRcDj3RF&format=png"
          alt="Tailwind CSS"
        />
        <SkillItem
          src="https://img.icons8.com/?size=48&id=PndQWK6M1Hjo&format=png"
          alt="Bootstrap"
        />
        <SkillItem
          src="https://img.icons8.com/?size=48&id=9Kvi1p1F0tUo&format=png"
          alt="Tableau"
        />
      </div>
    </div>
  );
}

const SkillItem = ({ src, alt }) => (
  <div className="flex justify-center">
    <img
      src={src}
      alt={alt}
      className="animate-bounce w-16 md:w-24"
    />
  </div>
);

export default Skills;
