import {format} from 'date-fns'
import { useState } from 'react';


export const useAdd = () =>{
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [dueDate, setDueDate] = useState('');


  const handleSubmit = (e,closePopUp,setTasks,tasks) => {
    e.preventDefault()
    if(!taskTitle.trim()){
        alert('Task title is required')
    }else if(!taskDescription.trim()){
        alert('Task description is required')
    }else{
          const addTask = () => {setTasks([...tasks,{
                id:Date.now(),
                title:taskTitle,
                description:taskDescription,
                date:dueDate || format(Date(), 'yyyy-MM-dd'),
                completed:false
          }])}
        
        addTask()
        closePopUp()
    }
  }

  return{
    handleSubmit,
    setTaskTitle,
    setTaskDescription,
    setDueDate
  }
}

