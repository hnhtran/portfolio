import React from 'react'
import { projects } from '../data'
import ProjectCard from '../components/ProjectCard'
import ProjectsNavBar from '../components/ProjectsNavBar'

export default function Projects() {
    return (
        <div className='px-5 py-2 overflow-y-auto' style={{height:'75vh'}}>
            <ProjectsNavBar />
            <div className="relative grid grid-cols-12 gap-4 m-5">
        {
            projects.map((project) => (
                <div className='col-span-12 p-2 m-2 bg-gray-200 rounded-lg dar:bg-dark-200 sm:col-span-6 lg:col-span-4'>
                    <ProjectCard project={project} key={project.name} />
                </div>
            ))
        }
        </div>
        </div>
    )
  }
