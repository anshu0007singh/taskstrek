import React, { useState, useEffect } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import Data from './assets/ImageData'

const oldTasks = localStorage.getItem("tasks");
const App = () => {

  const [tasks , setTasks] = useState(JSON.parse(oldTasks) || []);

  const handleDelete = (taskIndex) => {
    const newTask = tasks.filter((task,index) => index!==taskIndex);
    setTasks(newTask);
  }
  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  },[tasks])
  return (
    <div className='app'>
      <TaskForm setTasks = {setTasks}></TaskForm>
      <main className='app_main'>
        <TaskColumn tagColumn = "To Do" tagUrl = {Data.urlTodo} tasks = {tasks} status = "todo" handleDelete = {handleDelete}></TaskColumn>
        <TaskColumn tagColumn = "Doing" tagUrl = {Data.urlDoing} tasks = {tasks} status = "doing" handleDelete = {handleDelete}></TaskColumn>
        <TaskColumn tagColumn = "Done" tagUrl = {Data.urlDone} tasks = {tasks} status = "done" handleDelete = {handleDelete}></TaskColumn>
      </main>
    </div>
  )
}

export default App
