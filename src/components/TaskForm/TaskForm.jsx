import { PlusCircle, Search } from 'lucide-react';
import './taskform.css';
import React, { useContext } from 'react';
import { AppContext } from '../TaskManagerWrapper/TaskManagerWrapper';

const TaskForm = () => {
const { openPopUp,setSearchValue,setSelectValue } = useContext(AppContext);


  return (
    <div className="task-form">
      <div className="input-box" >
        <input onChange={(e)=> setSearchValue(e.target.value) } type="text"  placeholder='Search tasks...'  />
        <Search />
      </div>
      <select onChange={(e)=> setSelectValue(e.target.value)}>
        <option value="All Tasks">All Tasks</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
      <button onClick={(e) => openPopUp(e, 'add')} >
        <PlusCircle /><span>Add Task</span>
      </button>
    </div>
  );
}

export default TaskForm;