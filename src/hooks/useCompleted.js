export const useCompleted = (tasks,setTasks) => {
   const handleCompleted = (id) => {
        setTasks(tasks.map((el) => el.id === id ? {...el,completed:!el.completed} : el))
   } 

   return{
    handleCompleted
   }

}