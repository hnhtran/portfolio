import React from 'react'
import { projects } from '../data'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
    return (
        <div>
        <div>
            <nav>Navbar</nav>
        </div>
        {
            projects.map((project) => (
                <div>
                    <ProjectCard project={project} key={project.name} />
                </div>
            ))
        }
        </div>
    )
  }
