import game from "../assets/game.png"
const About = () => {
  return (
    <section className=" px-4" id="about">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-extrabold mt-1">About Me </h2>
        </div>

        <div className="bg-card rounded-2xl border-2 border-border p-6">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            {/* Character */}
            <div className="w-32 h-40 bg-gradient-to-b from-primary/20 to-accent/20 rounded-xl p-4 border-2 border-primary/30 text-center shrink-0">
              <div className="text-4xl mb-2 ">
                <img src={game} alt="game-icon" />
              </div>
              <div className="text-xs text-primary font-bold">LVL 25</div>
              <div className="mt-2 space-y-1">
                <div className="flex items-center gap-1 text-xs">
                  <span>❤️</span>
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-primary rounded-full" />
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs">
                                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-accent rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="text-center md:text-left">
              <p className="text-muted-foreground mb-4">
                Hi! I’m Soumeya, a passionate web developer who loves crafting clean and beautiful digital experiences. I enjoy turning ideas into functional, user-friendly websites while keeping a playful and colorful touch. Always curious and eager to learn, I strive to create projects that are both polished and meaningful.
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="bg-gradient-to-b from-primary/20 to-accent/20 px-3 py-1 rounded-full text-sm"> Clean Code </span>
                <span className="bg-gradient-to-b from-primary/20 to-accent/20 px-3 py-1 rounded-full text-sm">Cute Design</span>
                <span className="bg-gradient-to-b from-primary/20 to-accent/20 px-3 py-1 rounded-full text-sm">Fast Learner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
