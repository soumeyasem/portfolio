const projects = [
  {
    title: "Anychecklist",
    description: "PWA to create, organize, and complete checklists + the ability to use and create checklist templates for faster task management.",
    emoji: "✔️",
    tags: ["laravel", "React",],
  },
  {
    title: "Library App ",
    description: "A Library App that lets users browse, search, and manage books, track borrowing history, and keep their personal reading lists organized.",
    emoji: "📚",
    tags: ["Web App", "api"],
  },
  {
    title: "Roblow jump game",
    description: "A Roblox game where players jump across rows of glass, avoiding the fragile ones, and earn points for completing the course.",
    emoji: "🖲️",
    tags: ["game", "fun"],
  },
];

const Projects = () => {
  return (
    <section className="py-16 px-4 bg-muted/30" id="projects">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-extrabold mt-1">My Projects 🎯</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-card rounded-2xl border-2 border-border p-5 hover:scale-105 transition-transform"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-3">
                <span className="text-2xl">{project.emoji}</span>
              </div>
              <h3 className="font-bold mb-1">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-1 ">
                {project.tags.map((tag) => (
                  <span key={tag} className="inline-flex justify-center items-center w-20 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
