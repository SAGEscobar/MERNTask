import React, { useContext } from 'react'
import projectContext from '../../context/projects/projectContext'
import taskContext from '../../context/tasks/taskContext'

const Task = ({ task }) => {
  const tasksContext = useContext(taskContext)
  const { removeTask, getTasks, changeTaskState, saveCurrentTask } = tasksContext

  const projectsContext = useContext(projectContext)
  const { project } = projectsContext

  const [currentProject] = project

  const deleteTask = id => {
    removeTask(id)
    getTasks(currentProject.id)
  }

  const changeState = task => {
    task.state = !task.state

    changeTaskState(task)
    getTasks(currentProject.id)
  }

  const selectTask = task => {
    saveCurrentTask(task)
  }

  return (
    <li className="tarea sombra">
      <p>{task.name}</p>
      <div className="estado">
        {
          task.state ? 
          <button type="button" className="completo" onClick={() => changeState(task)}>Completo</button> :
          <button type="button" className="incompleto" onClick={() => changeState(task)}>Incompleto</button>
        }
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario" onClick={() => selectTask(task)}>Editar</button>
        <button 
        type="button"
        className="btn btn-secundario"
        onClick={() => deleteTask(task.id)}
        >
          Eliminar
        </button>
      </div>
    </li>

  )
}

export default Task