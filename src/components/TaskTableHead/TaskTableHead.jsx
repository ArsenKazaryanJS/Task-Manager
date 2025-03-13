import { ArrowDownUp } from 'lucide-react';
import './taskTableHead.css';
import { useContext } from 'react';
import { AppContext } from '../TaskManagerWrapper/TaskManagerWrapper';
import useSorted from '../../hooks/useSorted';

export const TaskTableHead = () => {
    const { tasks, setTasks } = useContext(AppContext);
    const {sortTasks} = useSorted(tasks, setTasks )


    return (
        <thead className='task-table-thead'>
            <tr>
                <th>Status</th>
                <th>
                    <div className="thead-th" onClick={() => sortTasks('title')}>
                        <span>Title</span> <ArrowDownUp />
                    </div>
                </th>
                <th>Description</th>
                <th>
                    <div className="thead-th" onClick={() => sortTasks('date')}>
                        <span>Due Date</span><ArrowDownUp />
                    </div>
                </th>
                <th>
                    <div className="thead-th" onClick={() => sortTasks('status')}>
                        <span>Status</span><ArrowDownUp />
                    </div>
                </th>
                <th>Action</th>
            </tr>
        </thead>
    );
};