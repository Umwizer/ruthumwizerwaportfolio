import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <p className="section-number mb-8">Skilled at</p>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill} className="tag text-sm py-2 px-4">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}