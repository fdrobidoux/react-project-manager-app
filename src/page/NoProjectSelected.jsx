import NoProjectsImg from "../assets/no-projects.png";
import Button from "../components/Button";

export default function NoProjectSelected({ newProjectHandler }) {
  return (
    <div className="text-center center">
      <img src={NoProjectsImg} alt="Project icon" className="inline-block w-16 h-auto text-center"/>
      <h1 className="font-bold text-2xl text-maroon">No Project Selected</h1>
      <h3 className="mt-4 text-lg text-classygrey font-medium">Select a project or get started with a new one</h3>
      <Button className="mt-8" handler={newProjectHandler}>Create new project</Button>
    </div>
  );
};