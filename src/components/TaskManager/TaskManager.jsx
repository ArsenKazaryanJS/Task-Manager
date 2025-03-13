import TaskForm from '../TaskForm/TaskForm'
import TaskTable from '../TaskTable/TaskTable'
import './taskmanager.css'
import React from 'react'

const TaskManager = () => {
  return (
    <div className='task-manager'>
    <TaskForm />
    <TaskTable />
    </div>
  )
}

export default TaskManager
