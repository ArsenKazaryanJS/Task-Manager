import { useState } from "react";

export const useEdit = (edit, tasks, setTasks) => {
    const [editTitle, setEditTitle] = useState(edit.title);
    const [editDescription, setEditDescription] = useState(edit.description);
    const [EditDate, setEditDate] = useState(edit.date);

    const handleEdit = (e,closePopUp) => {
        e.preventDefault()
        if(!editTitle.trim()){
            alert('Task title is required')
        }else if(!editDescription.trim()){
            alert('Task description is required')
        }else{
            setTasks( tasks.map((el) => el.id === edit.id ? {...el, title: editTitle, description: editDescription, date: EditDate} : el));
            closePopUp()
        }
    };

    return {
        handleEdit,
        setEditTitle,
        setEditDescription,
        setEditDate,
        editTitle,
        editDescription,
        EditDate
    };
};