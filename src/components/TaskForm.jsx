import React, {useState} from 'react'
import './TaskForm.css'
import Tag from './Tag'

const TaskForm = ({setTasks}) => {

    const[taskData,setTaskData] = useState({
        task:"",
        status:"todo",
        tags:[]
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setTaskData(prevValue => {
            return {...taskData,[name]:value}
        })
    }

    const checkTag = (tag) => {
        return taskData.tags.some(item => item===tag)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(taskData.task===""){
            alert("please enter a valid task title");
        }else if(taskData.tags.length===0){
            alert("Please select atleast one tag to proceed");
        }else{
            setTasks(prev => {
                return [...prev,taskData]
            })
            setTaskData({
                    task:"",
                    status:"todo",
                    tags:[]
                })
        }
    }
    const selectTag = (tag) =>{
       if(taskData.tags.some((item)=>item===tag)){
        const filterTags = taskData.tags.filter((item)=>item!==tag);
        setTaskData((prev) => {
            return {...prev,tags:filterTags}
        })
       }else{
        setTaskData((prev) => {
            return {...prev,tags : [...prev.tags,tag]}
        })
       }
    }
  return (
    <header className='app_header'>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" value = {taskData.task} name = "task" className='task_input' onChange = {handleChange} placeholder='Enter Your Task' />
            <div className='task_form_bottom_line'>
                <div>
                    <Tag TagName = "HTML" selectTag = {selectTag} selected = {checkTag("HTML")}/>
                    <Tag TagName = "CSS" selectTag = {selectTag} selected = {checkTag("CSS")}/>
                    <Tag TagName = "JavaScript" selectTag = {selectTag} selected = {checkTag("JavaScript")}/>
                    <Tag TagName = "React" selectTag = {selectTag} selected = {checkTag("React")}/>
                </div>
                <div>
                    <select value ={taskData.status} name="status" id="" className='task_status' onChange = {handleChange}>
                        <option value="todo">To Do</option>
                        <option value="doing">Doing</option>
                        <option value="done">Done</option>
                    </select>

                    <button type='submit' className='task_submit'>+ ADD TASK</button>
                </div>
            </div>
        </form>
    </header>
  )
}

export default TaskForm
