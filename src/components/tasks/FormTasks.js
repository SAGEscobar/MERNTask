import React, { useContext } from 'react'
import projectContext from '../../context/projects/projectContext'

const FromTasks = () => {
  const projectsContext = useContext(projectContext)
  const { project } = projectsContext

  if(!project) return null

  const [currentProject] = project

  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre de la tarea"
            name="name"
          />
        </div>

        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Tarea"
          />
        </div>

      </form>
    </div>
  )
}

export default FromTasks