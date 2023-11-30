import React from 'react';
import Input from "./UI/Input/Input";
import Button from "./UI/Button/Button";

const AddTask = ({setTask,addNewTask, task}) => {
    function getDate(){
        let curr = new Date();
        let date = curr.toISOString().substring(0,10);
        return date;
    }
    return (
        <>
            <h2>Добавить задачу</h2>
            <Input
                placeholder='Введите название задачи'
                value={task.title}
                onChange={(e)=>setTask({...task, title: e.target.value})}
            />
            <Input
                placeholder='Введите небольшое описание'
                value={task.description}
                onChange={(e)=>setTask({...task, description: e.target.value})}
            />
            <label style={{display:'block',marginTop:'10px'}}>Сделать до:</label>
            <Input
                type="date"
                min={getDate()}
                value={task.date}
                onChange={(e)=>setTask({...task, date: e.target.value})}
            />
            <Button style={{marginTop:'10px'}} onClick={addNewTask}>Добавить</Button>
        </>
    );
};

export default AddTask;