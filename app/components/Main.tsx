import React from 'react'
import ProjectCards from './ProjectCards';
const Main: React.FC = () => {
  return (
    <main className="p-4">
      <section id="home" className="my-4">
        <h2 className="text-2xl">Welcome to our Landing Page</h2>
      </section>

      <section id="about" className="my-4">
        <h2 className="text-2xl">About Us</h2>
      </section>

      <section id="services" className="my-4">
        <h2 className="text-2xl">Services</h2>
      </section>

      <section id="contact" className="my-4">
        <h2 className="text-2xl">Contact</h2>
      </section>

      <ProjectCards />
    </main>
  );
};

export default Main;
