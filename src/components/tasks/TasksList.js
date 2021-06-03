import React, { Fragment } from 'react'
import Task from './Task'

const TasksList = () => {
  const tasks = [
    { name: "Elegir plataforma", state: true },
    { name: "Elegir colores", state: false },
    { name: "Elegir plataformas de pago", state: false },
    { name: "Elegir Hosting", state: true }
  ]
  return (
    <Fragment>
      <h2>Proyecto: Tienda Virtual</h2>
      <ul className="listado-tareas">
        {
          tasks.length === 0 ?
            <li className="tarea"><p>No hay Tareas</p></li> :
            tasks.map(task => <Task task={task} />)
        }
      </ul>

      <button type="button" className="btn btn-eliminar">Eliminar proyecto &times;</button>
    </Fragment>
  )
}

export default TasksList