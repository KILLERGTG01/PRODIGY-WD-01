"use client"
import React, { useEffect } from 'react';

const projectsData = [
  { name: "Project 1", image: './assets/crys_choc_bar1.jpeg', description: "Description of Project 1" },
  { name: "Project 2", image: '/assets/crys_choc_bar2.jpeg', description: "Description of Project 2" },
];

const ProjectCards: React.FC = () => {
  useEffect(() => {
    createProjectCards();
  }, []);

  const createProjectCards = () => {
    const projectContainer = document.querySelector('.project-container');

    projectsData.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.classList.add('project-card', 'bg-white', 'p-4', 'rounded-lg', 'shadow-md', 'my-4');

      const projectImage = document.createElement('img');
      projectImage.src = project.image;
      projectImage.className = 'w-full h-32 object-cover rounded-md';
      const projectName = document.createElement('h3');
      projectName.textContent = project.name;
      projectName.className = 'text-xl font-bold mt-2';
      const projectDescription = document.createElement('p');
      projectDescription.textContent = project.description;
      projectDescription.className = 'text-gray-600';

      projectCard.appendChild(projectImage);
      projectCard.appendChild(projectName);
      projectCard.appendChild(projectDescription);

      projectContainer?.appendChild(projectCard);
    });
  };

  return <div className="project-container grid grid-cols-1 sm:grid-cols-2 gap-4"></div>;
};

export default ProjectCards;
