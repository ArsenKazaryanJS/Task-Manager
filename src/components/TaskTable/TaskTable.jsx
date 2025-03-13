import React, { useContext} from 'react'
import './tasktable.css'
import { AppContext } from '../TaskManagerWrapper/TaskManagerWrapper'
import { TaskTableHead } from '../TaskTableHead/TaskTableHead'
import  TaskTableRow  from '../TaskTableRow/TaskTableRow'
import useFiltered from '../../hooks/useFiltered'

const TaskTable = () => {
const {tasks,searchValue,selectValue} = useContext(AppContext)
const tasksFiltered = useFiltered(tasks,searchValue,selectValue)


  return (
    <div className='task-table-container'>
      <table className="task-table">
       <TaskTableHead/>
        <tbody>
          {
            tasksFiltered.map((task) => {
              return(
              <TaskTableRow key={task.id}  el={task}/>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}


export default TaskTable
