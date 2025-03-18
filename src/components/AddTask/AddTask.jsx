import { X } from "lucide-react";
import React, { useContext } from "react";
import "./addtask.css";
import { AppContext } from "../TaskManagerWrapper/TaskManagerWrapper";
import { useAdd } from "../../hooks/useAdd";

const AddTask = () => {
  const { closePopUp,setTasks,tasks } = useContext(AppContext);
  const { handleSubmit, setTaskTitle, setTaskDescription, setDueDate } = useAdd();

  return (
    <div className="new-task-container">
      <form className="Add-new-task">
        <div className="new-task">
          <X onClick={closePopUp} />
          <h2>New Task</h2>
        </div>
        <div className="new-task-title-description">
          <div className="new-task-title">
            <h3>Title</h3>
            <input
              type="text"
              name=""
              onChange={(e) => setTaskTitle(e.target.value)}
              placeholder="Enter task title"
            />
          </div>
          <div className="new-task-description">
            <h3>Description</h3>
            <textarea
              onChange={(e) => setTaskDescription(e.target.value)}
              name=""
              placeholder="Enter task description (optional)"
            ></textarea>
          </div>
          <div className="due-date">
            <h3>Due Date</h3>
            <input onChange={(e) => setDueDate(e.target.value)} type="date" />
          </div>
          <div className="new-task-add-cancel">
            <button className="cancel-btn" onClick={closePopUp}>
              Cancel
            </button>
            <button className="add-task-btn" onClick={(e)=> handleSubmit(e,closePopUp,setTasks,tasks)}>
              Add Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
