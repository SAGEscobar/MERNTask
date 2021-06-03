import React, { Fragment, useContext, useState } from 'react'
import projectContext from '../../context/projects/projectContext'

const NewProject = () => {
  // Get form's state
  const projectsContext = useContext(projectContext)
  const { form, form_error, showForm, addProject, showFormError } = projectsContext

  // Project state
  const [project, setProject] = useState({
    name: ''
  })

  const { name } = project

  const onChangeProject = e => {
    setProject({
      ...project,
      [e.target.name]: e.target.value
    })
  }

  const onSubmitProject = e => {
    e.preventDefault()

    if(name === '') {
      showFormError()
      return
    }

    addProject(project)

    setProject({name: ''})
  }

  const onClickForm = e => {
    onSubmitProject(e)
  }

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={showForm}
      >
        Nuevo Proyecto
    </button>
      {form && (
        <form
          className="formulario-nuevo-proyecto"
          onSubmit={onClickForm}
        >
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="name"
            value={name}
            onChange={onChangeProject}
          />

          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
          />
        </form>
      )}
      {form_error && (
        <p className="mensaje error">El nombre del proyecto es obligatorio</p>
      )}
    </Fragment>
  )
}

export default NewProject