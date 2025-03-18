import { X } from "lucide-react";
import React, { useContext } from "react";
import "./edittask.css";
import { AppContext } from "../TaskManagerWrapper/TaskManagerWrapper";
import { useEdit } from "../../hooks/useEdit";

const EditTask = () => {
  const { closePopUp, edit, tasks, setTasks } = useContext(AppContext);
  const {
    setEditTitle,
    setEditDescription,
    setEditDate,
    handleEdit,
    EditDate,
    editDescription,
    editTitle,
  } = useEdit(edit, tasks, setTasks);

  return (
    <div className="new-task-container">
      <form className="edit-task">
        <div className="new-task">
          <X onClick={closePopUp} />
          <h2>Edit Task</h2>
        </div>
        <div className="new-task-title-description">
          <div className="new-task-title">
            <h3>Title</h3>
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              placeholder="Enter task title"
            />
          </div>
          <div className="new-task-description">
            <h3>Description</h3>
            <textarea
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              placeholder="Enter task description (optional)"
            />
          </div>
          <div className="due-date">
            <h3>Due Date</h3>
            <input
              type="date"
              value={EditDate}
              onChange={(e) => setEditDate(e.target.value)}
            />
          </div>
          <div className="new-task-edit-cancel">
            <button className="cancel-btn" onClick={closePopUp}>
              Cancel
            </button>
            <button className="edit-task-btn" onClick={(e)=> {handleEdit(e,closePopUp)}}>
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditTask;
