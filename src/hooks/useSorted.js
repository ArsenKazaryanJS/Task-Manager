import React from 'react'

const useSorted = (tasks,setTasks) => {
    
    const sortTasks = (sortName) => {
        let sortedTasks;

        switch (sortName) {
            case 'date':
                sortedTasks = [...tasks].sort((a, b) => new Date(a.date) - new Date(b.date));
                break;
            case 'title':
                sortedTasks = [...tasks].sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'status':
                sortedTasks = [...tasks].sort((a, b) => b.completed - a.completed);
                break;
            default:
                sortedTasks = tasks; 
        }

        setTasks(sortedTasks);
    };

    return {sortTasks}

}

export default useSorted
