import { useDelete } from '../../hooks/useDelete'
import { useCompleted } from '../../hooks/useCompleted'
import { Check, SquarePen, Trash2 } from 'lucide-react'
import React, { useContext} from 'react'
import { AppContext } from '../TaskManagerWrapper/TaskManagerWrapper'


const TaskTableRow = ({el}) => {
    const {openPopUp,tasks,setTasks,setEdit} = useContext(AppContext)
    const {handleDelete} = useDelete(tasks,setTasks)
    const {handleCompleted} = useCompleted(tasks,setTasks)
    


    return (
        <tr>
        <td>  {el.completed ? (<Check className='check-icon' onClick={() => handleCompleted(el.id)}/>
           ) : <button className='tbody-selected-btn' onClick={() => handleCompleted(el.id)}></button>
          }
        </td>
        <td><p className={`${el.completed ? "tbody-title completed" : "tbody-title"}`}>{el.title}</p></td>
        <td><p className="tbody-text">{el.description}</p></td>
        <td><p className="tbody-date">{el.date}</p></td>
        <td> { el.completed ? ( <span className="tbody-status-completed">completed</span>  ) : (
              <span className="tbody-status">pending</span>)}
        </td>
        <td><div className="tbody-actions">
            <SquarePen onClick={(e)=> {openPopUp(e,'edit'); setEdit(el)}}/>
            <Trash2 onClick={() => handleDelete(el.id)}/>
            </div>
          </td>
      </tr>
    )
}


export default TaskTableRow;