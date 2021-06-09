import React, { useReducer } from 'react'
import { ADD_TASK, CURRENT_TASK, PROJECT_TASKS, REMOVE_TASK, TASK_STATE, TASK_VALIDATION, UPDATE_TASK } from '../../types'
import TaskContext from './taskContext'
import TaskReducer from './taskReducer'
import uuid from 'uuid'

const TaskState = props => {
  const initialState = {
    tasks: [
      { id: 1, name: "Elegir plataforma", state: true, projectId: 1 },
      { id: 2, name: "Elegir colores", state: false, projectId: 2 },
      { id: 3, name: "Elegir plataformas de pago", state: false, projectId: 3 },
      { id: 4, name: "Elegir Hosting", state: true, projectId: 1 },
      { id: 5, name: "Elegir plataforma", state: true, projectId: 1 },
      { id: 6, name: "Elegir colores", state: false, projectId: 2 },
      { id: 7, name: "Elegir plataformas de pago", state: false, projectId: 3 },
      { id: 8, name: "Elegir Hosting", state: true, projectId: 1 },
      { id: 9, name: "Elegir plataforma", state: true, projectId: 1 },
      { id: 10, name: "Elegir colores", state: false, projectId: 2 },
      { id: 11, name: "Elegir plataformas de pago", state: false, projectId: 3 },
      { id: 12, name: "Elegir Hosting", state: true, projectId: 1 },
      { id: 13, name: "Elegir plataforma", state: true, projectId: 1 },
      { id: 14, name: "Elegir colores", state: false, projectId: 2 },
      { id: 15, name: "Elegir plataformas de pago", state: false, projectId: 3 },
      { id: 16, name: "Elegir Hosting", state: true, projectId: 1 }
    ],
    project_tasks: null,
    task_error: false,
    selected_task: null
  }

  const [state, dispatch] = useReducer(TaskReducer, initialState)

  const getTasks = projectId => {
    dispatch({
      type: PROJECT_TASKS,
      payload: projectId
    })
  }

  const addTask = task => {
    task.id = uuid.v4()
    dispatch({
      type: ADD_TASK,
      payload: task
    })
  }

  const taskValidation = () => {
    dispatch({
      type:TASK_VALIDATION
    })
  }

  const removeTask = id => {
    dispatch({
      type: REMOVE_TASK,
      payload: id
    })
  }

  const changeTaskState = task => {
    dispatch({
      type: TASK_STATE,
      payload: task
    })
  }

  const saveCurrentTask = task => {
    dispatch({
      type: CURRENT_TASK,
      payload: task
    })
  }

  const updateTask = task => {
    dispatch({
      type: UPDATE_TASK,
      payload: task
    })
  }

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        project_tasks: state.project_tasks,
        task_error: state.task_error,
        selected_task: state.selected_task,
        getTasks,
        addTask,
        taskValidation,
        removeTask,
        changeTaskState,
        saveCurrentTask,
        updateTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskState