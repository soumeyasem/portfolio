import React from 'react';
import me from "../assets/me.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-xl mx-auto">
        {/* Avatar */}
        <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent p-[2px]">
    <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
      <img src={me} alt="My Image" className="w-full h-full object-cover" />
    </div>
        </div>

       
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
          Hi, I'm <span className="text-primary">Soumeya Semsoum</span> !
        </h1>
        <p className="text-muted-foreground mb-8">
          A developer who is passionate by making websites 
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#projects" className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
            View Projects 
          </a>
          <a href="#contact" className="border-2 border-primary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary/10 transition">
            Say Hello 
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
