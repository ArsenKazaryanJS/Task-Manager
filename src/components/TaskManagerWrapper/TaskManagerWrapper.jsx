import "./task_wrapper.css";
import usePopUp from "../../hooks/usePopUp";
import { createContext, useState } from "react";
import {TaskManagerHeader,TaskManager,EditTask,AddTask} from "../index"
export const AppContext = createContext()

const TaskManagerWrapper = () => {
  const [tasks,setTasks] = useState([
    {
      "id": 1678901234567,
      "title": "Grocery Shopping",
      "description": "Buy fruits, vegetables, and dairy products.",
      "date": "2025-03-20",
      "completed": false
  },
  {
      "id": 1678901234568,
      "title": "Finish Project Report",
      "description": "Complete the final report for the project due next week.",
      "date": "2025-03-25",
      "completed": false
  },
  {
      "id": 1678901234569,
      "title": "Gym Workout",
      "description": "Attend the gym for a full-body workout.",
      "date": "2025-03-19",
      "completed": false
  },
  {
      "id": 1678901234570,
      "title": "Read a Book",
      "description": "Finish reading 'The Great Gatsby'.",
      "date": "2025-03-22",
      "completed": false
  },
  {
      "id": 1678901234571,
      "title": "Doctor's Appointment",
      "description": "Visit the doctor for a routine check-up.",
      "date": "2025-03-21",
      "completed": false
  }
  ])
  const {popUp,openPopUp,closePopUp} = usePopUp()
  const [edit,setEdit] = useState({})
  const [searchValue,setSearchValue] = useState('')
  const [selectValue,setSelectValue] = useState('All Tasks')

  
  
  return (
    <AppContext.Provider value={{openPopUp,closePopUp,tasks,setTasks,edit,setEdit,searchValue,setSearchValue,selectValue,setSelectValue}}>
    <div className="task-manager-container">
        <TaskManagerHeader/>
        <TaskManager/>
        {popUp === 'add' && <AddTask/>}
        {popUp === 'edit'&& <EditTask/>}
      </div>
    </AppContext.Provider>
  );
};

export default TaskManagerWrapper;
