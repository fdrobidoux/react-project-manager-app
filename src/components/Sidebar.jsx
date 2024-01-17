import Button from "./Button";

export default function Sidebar({ newProjectHandler, projectList, showProjectPageHandler, currentProject, children, ...props }) {
  let currentProjectId = currentProject == null ? -1 : currentProject.id;
  
  return (
    <div className="col-span-4 overflow-hidden h-screen bg-maroon-dark rounded-tr-lg pt-16 px-8" {...props}>
      <h2 className="uppercase text-parcheminwhite text-xl font-semibold pb-8">Your Projects</h2>
      <Button handler={newProjectHandler}>+ Add Project</Button>
      <div className="pt-5">
        <ul>
          {projectList.map(
          (x) => {
            var muhClassName = "px-2 py-1 text-lg text-left w-full mt-2 ";
            let isSelectedProject = x.id == currentProjectId;
            if (isSelectedProject) {
              muhClassName += "text-parcheminwhite bg-maroon-semidark ";
            } else {
              muhClassName += "text-classygrey bg-transparent hover:text-parcheminwhite-dark hover:bg-maroon-semidark ";
            }
            return (<li key={x.id} className="list-image-none">
              <button value={x.id} disabled={isSelectedProject} onClick={showProjectPageHandler} className={muhClassName}>
                {x.title}
              </button>
            </li>)
          })}
        </ul>
      </div>
    </div>
  );
};