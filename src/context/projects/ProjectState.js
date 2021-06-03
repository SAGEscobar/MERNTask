import React, { useReducer } from 'react'
import uuid from 'uuid'
import { PROJECT_FORM, GET_PROJECTS, ADD_PROJECT, FORM_VALIDATION, CURRENT_PROJECT } from '../../types'
import projectContext from './projectContext'
import projectReducer from './projectReducer'

const ProjectState = props => {

  const projects = [
    { id: 1, name: "Tienda virtual" },
    { id: 2, name: "Intranet" },
    { id: 3, name: "Diseño de website" }
  ]

  const initialState = {
    projects: [],
    form: false,
    form_error: false,
    project: null
  }

  const [state, dispatch] = useReducer(projectReducer, initialState)

  const showForm = () => {
    dispatch({
      type: PROJECT_FORM
    })
  }

  // Get Projects
  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects
    })
  }

  const addProject = project => {
    project.id = uuid.v4()

    dispatch({
      type: ADD_PROJECT,
      payload: project
    })
  }

  const showFormError = () => {
    dispatch({
      type: FORM_VALIDATION
    })
  }

  const currentProject = projectId => {
    dispatch({
      type: CURRENT_PROJECT,
      payload: projectId
    })
  }

  return (
    <projectContext.Provider value={{
      projects: state.projects,
      form: state.form,
      form_error: state.form_error,
      project: state.project,
      showForm,
      getProjects,
      addProject,
      showFormError,
      currentProject
    }}>
      {props.children}
    </projectContext.Provider>
  )
}

export default ProjectState