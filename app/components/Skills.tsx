import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-black/10 px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <p className="section-number mb-16">02 / SKILLS</p>

        <div className="grid border-l border-t border-black/10 md:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="border-b border-r border-black/10 p-8"
            >
              <h3 className="serif text-3xl">{skill.category}</h3>

              <div className="mt-8 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="mono border border-black/15 px-3 py-2 text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}