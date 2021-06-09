import React, { useContext, useEffect } from 'react'
import projectContext from '../../context/projects/projectContext'
import Project from './Project'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const ProjectsList = () => {

  const projectsContext = useContext(projectContext)
  const { projects, getProjects } = projectsContext

  useEffect(() => {
    setTimeout(() => {
      getProjects()
    }, 100)
    //eslint-disable-next-line
  }, [])

  if (projects.length === 0) return <p>Aun no tienes proyectos</p>

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
      {projects.map(project => (
        <CSSTransition key={project.id} timeout={200} classNames="proyecto">
          <Project project={project} />
        </CSSTransition>
      ))}
      </TransitionGroup>
    </ul>
  )
}

export default ProjectsList