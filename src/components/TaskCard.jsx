import React from 'react'
import './TaskCard.css'
import Tag from './Tag'
import Data from '../assets/ImageData'

const TaskCard = (props) => {
  return (
    <article className='task_card'>
        <p className='task_text'>{props.title}</p>
        <div className='task_card_bottom_line'>
            <div className='task_card_tags'>
              {
                props.tags.map((tag,index)=><Tag key = {index} TagName = {tag} selected = {true}></Tag>)
              }
            </div>
            <div className='task_delete' onClick={() => props.handleDelete(props.index)}>
                <img className='delete_icon' src={Data.deleteIcon} alt="" />
            </div>      
        </div>
    </article>
  )
}

export default TaskCard
