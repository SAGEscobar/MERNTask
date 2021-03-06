import {
  ADD_PROJECT,
  CURRENT_PROJECT,
  FORM_VALIDATION,
  GET_PROJECTS,
  PROJECT_FORM,
  REMOVE_PROJECT
} from "../../types"


export default (state, action) => {
  switch (action.type) {
    case PROJECT_FORM:
      return {
        ...state,
        form: true
      }
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload
      }
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        form: false,
        form_error: false
      }
    case FORM_VALIDATION:
      return {
        ...state,
        form_error: true
      }
    case CURRENT_PROJECT:
      return {
        ...state,
        project: state.projects.filter(project => project.id === action.payload)
      }
    case REMOVE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(project => project.id !== action.payload),
        project: null
      }
    default:
      return state
  }
}