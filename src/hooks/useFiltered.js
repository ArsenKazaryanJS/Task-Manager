import { useMemo } from 'react';

const useFiltered = (tasks, searchValue, selectValue) => {
    return useMemo(() => {
        return tasks.filter((item) => {
            if (selectValue === 'Pending' && item.completed === true) {
                return false; 
            } else if (selectValue === 'Completed' && item.completed === false) {
                return false; 
            }
            return item.title.toLowerCase().includes(searchValue.toLowerCase());
        });
    }, [tasks, searchValue, selectValue]);
}

export default useFiltered;