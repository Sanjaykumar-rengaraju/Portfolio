import React from 'react';
import facts from '../assets/factsapp_img.png';
import chat from '../assets/chatapp_img.png';
import quote from '../assets/quote_img.png';
import todo from '../assets/todo_img.png';
import trans from '../assets/translator_img.png';

function Projects() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 min-h-screen" id='projects'>
      <div className="text-4xl md:text-6xl text-orange-400 font-semibold mb-12 text-center">
        PROJECTS
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center">
        <ProjectCard
          imgSrc={facts}
          alt="facts"
          title="Facts Generating Application"
          description="Built with React and integrated NumbersAPI."
          link="https://facts-six.vercel.app/"
        />
        <ProjectCard
          imgSrc={chat}
          alt="chat"
          title="Chat Application"
          description="Built with React, Node.js, and SocketIO."
          link="https://github.com/Sanjaykumar-rengaraju/ChatApp_with_Socket.io"
        />
        <ProjectCard
          imgSrc={quote}
          alt="quote"
          title="Quote Generation Application"
          description="Built with HTML, CSS, and JavaScript for practicing DOM manipulation."
          link="https://sanjaykumar-rengaraju.github.io/JavaScript_Projects/quote-generator/"
        />
        <ProjectCard
          imgSrc={todo}
          alt="todo"
          title="To-Do Application"
          description="Built with HTML, CSS, and JavaScript for practicing DOM manipulation and local storage."
          link="https://sanjaykumar-rengaraju.github.io/JavaScript_Projects/to-do%20list/"
        />
        <ProjectCard
          imgSrc={trans}
          alt="trans"
          title="Translator Application"
          description="Built with React Native and integrated TranslatorAPI."
          link="https://github.com/Sanjaykumar-rengaraju/Translator_App_Using_ReactNative"
        />
      </div>
    </div>
  );
}

const ProjectCard = ({ imgSrc, alt, title, description, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="max-w-xs md:max-w-md lg:max-w-xl xl:max-w-2xl rounded-lg overflow-hidden shadow-lg bg-orange-300 flex flex-col">
    <div className="aspect-w-16 aspect-h-9 flex-shrink-0">
      <img src={imgSrc} alt={alt} className="w-full h-full object-cover" />
    </div>
    <div className="p-6 flex-grow">
      <h3 className="text-xl md:text-4xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-700 text-xl md:text-3xl">{description}</p>
    </div>
  </a>
);

export default Projects;
