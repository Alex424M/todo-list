import React from 'react';
import Button from "./UI/Button/Button";
import dateFormat from "dateformat";

const Task = ({deleteTask,item}) => {
    function  getDate(today){
        return new Intl.DateTimeFormat('ru-RU', {day: '2-digit',month: '2-digit',year: 'numeric'}).format(today)
    }
    return (
        <div className="item">
            <div>
                <div className="title">{item.title}</div>
                <div className="description">{item.description}</div>
                <div className="date">{dateFormat(item.date, "dd mmmm yyyy")}</div>
            </div>
            <Button onClick={()=>deleteTask(item.title)}>Выполнено</Button>
        </div>
    );
};

export default Task;