import { useState } from "react";
import Button from "../components/Button";
import ProjectDetails from "../components/ProjectDetails";
import TaskList from "../components/TaskList";

export default function ShowProject({ project, deleteProjectFn, showNoProjectSelectedHandler, addTaskFn, removeTaskFn }) {
  return (
    <div className="px-4">
      <ProjectDetails 
        project={project} 
        deleteProjectFn={deleteProjectFn} 
        showNoProjectSelectedHandler={showNoProjectSelectedHandler} 
      />
      <hr className="my-4 border-parcheminwhite-dark border-t-2"/>
      <TaskList project={project} addTaskFn={addTaskFn} removeTaskFn={removeTaskFn} />
    </div>
  );
}