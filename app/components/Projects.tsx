import { projects } from "../data/portfolio";

export default function Projects() {
  const featured = projects.filter(p => p.featured);
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <p className="section-number mb-4">03 My Works</p>
        <div className="flex-between mb-8">
          <h2 className="serif text-4xl md:text-5xl">Selected Work</h2>
          <div className="flex gap-3">
            <span className="tag cursor-pointer">All</span>
            <span className="tag cursor-pointer">Front-End</span>
            <span className="tag cursor-pointer">Java</span>
            <span className="tag cursor-pointer">Figma</span>
          </div>
        </div>

        <div className="grid-3">
          {featured.map((project) => (
            <div key={project.title} className="card group">
              <div className="relative overflow-hidden rounded-lg">
                <div className="bg-muted h-48 flex items-center justify-center text-muted-fg">
                  {project.title}
                </div>
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href={project.github} target="_blank" rel="noopener" className="btn-primary">View</a>
                </div>
              </div>
              <div className="mt-4">
                <p className="mono text-[10px] uppercase tracking-widest text-muted">{project.category}</p>
                <h3 className="serif text-2xl font-bold mt-1">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}