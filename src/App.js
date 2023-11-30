import './App.css';
import Input from "./components/UI/Input/Input";
import Button from "./components/UI/Button/Button";
import {useState} from "react";
import Task from "./components/Task";
import AddTask from "./components/addTask";

function App() {
    const [tasks, setTasks] = useState([
        {title: 'Почистить зубы', description: 'Утром почистить зубы', date:'2020-12-12'},
        {title: 'Собрать рюкзак', description: 'Утром собрать рюкзак', date:'2020-12-12'},
        {title: 'Купить проездной билет', description: 'Утром купить проездной билет', date:'2020-12-12'},
    ]);
    const [task, setTask] = useState({
        title:'',
        description:'',
        date:'',
    });
    function addNewTask(){
        setTasks([...tasks,task]);
        setTask({title:'',description:'',date:'',})
    }
    function deleteTask(title){
        const updatedTasks = tasks.filter(item => item.title !== title)
        setTasks(updatedTasks);
    }
  return (
    <div className="App">
        <h1>ToDo app</h1>
        <AddTask addNewTask={addNewTask} setTask={setTask} task={task}/>


        <h2>Список дел:</h2>
        {tasks.length?
            tasks.map(item=>(
            <Task deleteTask={deleteTask} item={item}/>
        ))
        :<h3>Список пуст</h3>
        }
    </div>
  );
}

export default App;
