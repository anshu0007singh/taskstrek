import React from 'react'
import './TaskColumn.css'
import TaskCard from './TaskCard'

const TaskColumn = (props) => {
  return (
      <section className='task_column'>
        <h2 className='task_column_heading'>
            <img className = 'task_column_icon' src = {props.tagUrl} alt="" />
            {props.tagColumn}
        </h2>
        {
          props.tasks.map((task,index) => task.status===props.status && <TaskCard key = {index} title = {task.task} tags = {task.tags} handleDelete = {props.handleDelete} index = {index}></TaskCard>)
        }
      </section>
  )
}

export default TaskColumn
