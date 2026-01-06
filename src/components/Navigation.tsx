const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-3xl mx-auto px-10 py-3 flex items-center justify-between">
        <span className="font-bold text-primary text-[24px]">Portfolio</span>
        <div className="flex gap-4 text-sm">
          <a href="#about" className="hover:text-primary transition">About</a>
          <a href="#projects" className="hover:text-primary transition">Projects</a>
          <a href="#skills" className="hover:text-primary transition">Skills</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
