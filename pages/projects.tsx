import { useState } from "react";
import { projects as projectsData } from "../data";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavBar from "../components/ProjectsNavBar";
import { Category } from "../type";

export default function Projects() {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }
    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <div className="px-5 py-2" style={{ height: "75vh" }}>
      <ProjectsNavBar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />
      <div className="overflow-y-auto" style={{height: "60vh"}}>
        <div className="relative grid grid-cols-12 gap-4 m-5 overflow-y-auto">
        {projects.map((project) => (
          <div key={project.name} className="col-span-12 p-2 m-2 bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-4" id="col-span-6-modified">
            <ProjectCard project={project} key={project.name} />
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
