import "./task_wrapper.css";
import usePopUp from "../../hooks/usePopUp";
import { createContext, useState } from "react";
import {TaskManagerHeader,TaskManager,EditTask,AddTask} from "../index"
export const AppContext = createContext()

const TaskManagerWrapper = () => {
  const [tasks,setTasks] = useState(  [
    { "id": 1672531199005, "title": "Plan a Trip", "description": "Determine the location and dates for the next trip.", "date": "2025-04-01", "completed": false },
    { "id": 1672531199006, "title": "Exercise", "description": "Visit the gym or go for a run.", "date": "2025-03-14", "completed": false },
    { "id": 1672531199007, "title": "Culinary Experiment", "description": "Cook a new dish from a recipe.", "date": "2025-03-15", "completed": false },
    { "id": 1672531199008, "title": "Volunteer Work", "description": "Participate in a volunteer project.", "date": "2025-03-20", "completed": true },
    { "id": 1672531199009, "title": "Visit an Exhibition", "description": "Go to a contemporary art exhibition.", "date": "2025-03-22", "completed": false },
    { "id": 1672531199010, "title": "Update Resume", "description": "Update your resume and LinkedIn profile.", "date": "2025-03-25", "completed": false },
    { "id": 1672531199011, "title": "Learn a New Language", "description": "Start learning the basics of a new language.", "date": "2025-04-05", "completed": false },
    { "id": 1672531199012, "title": "Family Evening", "description": "Organize a board game night with family.", "date": "2025-03-30", "completed": true },
    { "id": 1672531199013, "title": "Reading Articles", "description": "Read several articles on a topic of interest.", "date": "2025-03-28", "completed": false },
    { "id": 1672531199014, "title": "House Cleaning", "description": "Do a thorough cleaning of the apartment.", "date": "2025-04-02", "completed": false }
],)
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
