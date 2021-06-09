import React, { Fragment, useContext } from 'react'
import projectContext from '../../context/projects/projectContext'
import taskContext from '../../context/tasks/taskContext'
import Task from './Task'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const TasksList = () => {
  const projectsContext = useContext(projectContext)
  const { project, removeProject } = projectsContext

  const tasksContext = useContext(taskContext)
  const { project_tasks } = tasksContext

  if (!project) return <h2>Selecciona un proyecto</h2>

  const [currentProject] = project

  return (
    <Fragment>
      <h2>Proyecto: {currentProject.name}</h2>
      <ul className="listado-tareas">
        {
          project_tasks.length === 0 ?
            <li className="tarea"><p>No hay Tareas</p></li> :
            <TransitionGroup>
              {
                project_tasks.map(
                  task => <CSSTransition key={task.id} timeout={200} classNames="tarea">
                    <Task task={task} />
                  </CSSTransition>
                )
              }
            </TransitionGroup>
        }
      </ul>

      <button
        type="button"
        className="btn btn-eliminar"
        onClick={() => removeProject(currentProject.id)}
      >
        Eliminar proyecto &times;
      </button>
    </Fragment>
  )
}

export default TasksList