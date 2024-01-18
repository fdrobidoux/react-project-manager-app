import { useRef, useState } from "react";
import Button from "./Button";

export default function TaskList({project, addTaskFn, removeTaskFn}) {
  const [taskInputValue, setTaskInputValue] = useState();
  const [tasks, setTasks] = useState(project.tasks);

  function addTaskLocal(e) {
    e.preventDefault(true);
    let taskName = e.target.taskName.value;
    let newTasks = [...tasks];
    newTasks.push(taskName);
    setTasks(newTasks);
    addTaskFn(taskName);
    e.target.taskName.value = "";
  }

  function removeTaskLocal(taskIndex) {
    let newTasks = [...tasks];
    newTasks.splice(taskIndex, 1);
    setTasks(newTasks);
    removeTaskFn(taskIndex);
  }

  return (<>
    <h2 className="text-2xl font-bold text-maroon-light pb-4">Tasks</h2>
    <form onSubmit={addTaskLocal}>
      <input className="bg-parcheminwhite px-2 py-1" type="text" name="taskName" required/>
      <Button archetype="cancel" type="submit">Add Task</Button>
    </form>
    <ol className="py-2 mt-4 bg-parcheminwhite">
      {project.tasks.map((x, i) => 
        <li key={i} className="font-semibold bg-parcheminwhite my-2 py-1 px-4">
          {x.toString()}
          <button className="float-right" type="button" onClick={() => removeTaskLocal(i)}>Clear</button>
        </li>
      )}
    </ol>
  </>);
}