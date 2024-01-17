import { useState } from "react";

import Sidebar from "./components/Sidebar";

import NoProjectSelected from "./page/NoProjectSelected";
import CreateNewProject from "./page/CreateNewProject";
import ShowProject from "./page/ShowProject";

function App() {
  const [projectList, setProjectList] = useState([{
    id: 0,
    title: "Test Project",
    description: "Some description\nblah blah blah blah blah blah blah blah",
    dueDate: new Date("02-15-1994"),
    tasks: []
  }, {
    id: 1,
    title: "Another Project That's long af",
    description: "Lorem ipsum sir dolor hames or whatever",
    dueDate: new Date("01-29-2024"),
    tasks: ["Do something", "Ignore my cats"]
  }]);
  const [currentProject, setCurrentProject] = useState(null);

  const [currentPage, setCurrentPage] = useState("NoProjectsSelected");

  function showNoProjectSelected() {
    setCurrentPage("NoProjectsSelected");
  }

  function showNewProjectForm() {
    setCurrentProject(null);
    setCurrentPage("CreateNewProject");
  }

  function showProjectPage(event) {
    setCurrentProject(projectList.find(x => x.id == event.target.value));
    setCurrentPage("ShowProject");
  }

  function addProject(newProjectObj) {
    if (projectList.length != 0) {
      newProjectObj.id = projectList.reduce((prev, curr) => prev.id > curr.id ? prev : curr).id + 1;
    } else {
      newProjectObj.id = 0;
    }
    projectList.push(newProjectObj);
    setProjectList(projectList);
  }

  function deleteProject(projectId) {
    let projectIndex = projectList.findIndex(x => x.id === projectId);
    projectList.splice(projectIndex, 1);
    setProjectList(projectList);
  }

  function addTask(taskName) {
    let newTasks = [...currentProject.tasks];
    newTasks.push(taskName);
    currentProject.tasks = newTasks;
    setCurrentProject(currentProject, true);
  }

  function removeTask(taskIndex) {
    let newTasks = [...currentProject.tasks];
    newTasks.splice(taskIndex, 1);
    currentProject.tasks = newTasks;
    setCurrentProject(currentProject, true);
  }

  return (
    <div className="grid grid-cols-12 gap-4">
      <Sidebar newProjectHandler={showNewProjectForm} projectList={projectList} showProjectPageHandler={showProjectPage} currentProject={currentProject} />
      <div className="col-span-8 pt-16">
        {currentPage == "NoProjectsSelected" ? <NoProjectSelected newProjectHandler={showNewProjectForm} /> : undefined}
        {currentPage == "CreateNewProject" ? <CreateNewProject noProjectHandler={showNoProjectSelected} addProjectFn={addProject} /> : undefined}
        {currentPage == "ShowProject" ? <ShowProject project={currentProject} deleteProjectFn={deleteProject} showNoProjectSelectedHandler={showNoProjectSelected} addTaskFn={addTask} removeTaskFn={removeTask} /> : undefined}
      </div>
    </div>
  );
}

export default App;
