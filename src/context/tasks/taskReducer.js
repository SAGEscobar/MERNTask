import { ADD_TASK, CURRENT_TASK, PROJECT_TASKS, REMOVE_TASK, TASK_STATE, TASK_VALIDATION, UPDATE_TASK } from "../../types"


export default (state, action) => {
  switch (action.type) {
    case PROJECT_TASKS:
      return {
        ...state,
        project_tasks: state.tasks.filter(task => task.projectId === action.payload)
      }
    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
        task_error: false
      }
    case TASK_VALIDATION:
      return {
        ...state,
        task_error: true
      }
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      }
    case TASK_STATE:
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task),
        selected_task: null
      }
    case CURRENT_TASK:
      return {
        ...state,
        selected_task: action.payload
      }
    default:
      return state
  }
}