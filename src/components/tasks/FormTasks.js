import React, { useContext, useEffect, useState } from 'react'
import projectContext from '../../context/projects/projectContext'
import taskContext from '../../context/tasks/taskContext'

const FromTasks = () => {
  const projectsContext = useContext(projectContext)
  const { project } = projectsContext

  const tasksContext = useContext(taskContext)
  const { task_error, selected_task, addTask, taskValidation, updateTask, getTasks } = tasksContext

  useEffect(() => {
    if(selected_task !== null){
      setTask(selected_task)
    }else{
      setTask({name: ''})
    }
  }, [selected_task])

  const [task, setTask] = useState({
    name: ''
  })

  const name = task.name

  if(!project) return null

  const [currentProject] = project

  const handleChange = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault()

    if(name.trim() === ''){
      taskValidation()
      return;
    }

    if(selected_task === null){
    task.projectId = currentProject.id
    task.state = false

    addTask(task)
    }else{
      updateTask(task)
    }
    getTasks(currentProject.id)
    setTask({name: ''})
  }

  return (
    <div className="formulario">
      <form
        onSubmit={onSubmit}
      >
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre de la tarea"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>

        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value={ selected_task ? "Actualizar tarea" : "Agregar Tarea" }
          />
        </div>

      </form>
      { task_error && (
        <p className="mensaje error">El nombre de la tarea es obligatorio</p>
      ) }
    </div>
  )
}

export default FromTasks