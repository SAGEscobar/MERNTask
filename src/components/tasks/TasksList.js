import React, { Fragment, useContext } from 'react'
import projectContext from '../../context/projects/projectContext'
import Task from './Task'

const TasksList = () => {
  const projectsContext = useContext(projectContext)
  const { project, removeProject } = projectsContext

  if (!project) return <h2>Selecciona un proyecto</h2>

  const [currentProject] = project

  const tasks = [
    { name: "Elegir plataforma", state: true },
    { name: "Elegir colores", state: false },
    { name: "Elegir plataformas de pago", state: false },
    { name: "Elegir Hosting", state: true }
  ]
  return (
    <Fragment>
      <h2>Proyecto: {currentProject.name}</h2>
      <ul className="listado-tareas">
        {
          tasks.length === 0 ?
            <li className="tarea"><p>No hay Tareas</p></li> :
            tasks.map(task => <Task task={task} />)
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