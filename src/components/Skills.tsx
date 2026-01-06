const skills = [
  { name: "PHP – Laravel", emoji: "🖥️" },
  { name: "JavaScript – React", emoji: "⚛️" },
  { name: "MySQL", emoji: "💾" },
  { name: "Flutter (Dart) / Kotlin", emoji: "📱" },
  { name: "WordPress", emoji: "🌐" },
  { name: "Git / GitHub / Postman", emoji: "🛠️" },
];

const Skills = () => {
  return (
    <section className="py-16 px-4 bg-muted/30" id="skills">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          
          <h2 className="text-2xl font-extrabold mt-1">Skill Tree 🌟</h2>
        </div>

        <div className="bg-card rounded-2xl border-2 border-border p-6 space-y-4">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex items-center gap-2 mb-1 font-semibold">
                <span className="text-lg">{skill.emoji}</span>
                <span>{skill.name}</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                {/* Longer solid bar */}
                <div className="h-full bg-primary rounded-full w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
