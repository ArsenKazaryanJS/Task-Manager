export const useDelete = (tasks,setTasks) => {
  const handleDelete = (id) => {
    setTasks(tasks.filter((el) => el.id !== id))
  }

  return{
    handleDelete
  }
}