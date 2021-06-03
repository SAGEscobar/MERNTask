import React, { useContext, useEffect } from 'react'
import projectContext from '../../context/projects/projectContext'
import Project from './Project'

const ProjectsList = () => {

  const projectsContext = useContext(projectContext)
  const { projects, getProjects } = projectsContext

  useEffect(() => {
    setTimeout(() => {
      getProjects()
    }, 2000)
  }, [])

  if (projects.length === 0) return <p>Aun no tienes proyectos</p>

  return (
    <ul className="listado-proyectos">
      {projects.map(project => (
        <Project key={Project.id} project={project} />
      ))}
    </ul>
  )
}

export default ProjectsList