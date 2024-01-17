import Button from "./Button";

export default function ProjectDetails({ project, deleteProjectFn, showNoProjectSelectedHandler }) {
  const dateOptions = {
    month: 'short', 
    day: 'numeric'
  }

  function formatDate(date) {
    if (typeof date != Date) {
      date = new Date(date);
    }
    return date.toLocaleDateString("en-us", dateOptions) + ", " + date.getFullYear();
  }
  
  function generateDescription(description) {
    return (<>
      {description.split("\n").map((x, i) => <p key={i} className="leading-loose">{x}</p>)}
    </>);
  }

  function onClickDeleteButton(e) {
    deleteProjectFn(project.id);
    showNoProjectSelectedHandler();
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-maroon float-left">{project.title}</h1>
      <div className="float-right">
        <Button archetype="cancel" handler={onClickDeleteButton}>Delete</Button>
      </div>
      <div className="clear-both">
        <p className="text-classygrey">{formatDate(project.dueDate)}</p>
        <div className="pt-2">{generateDescription(project.description)}</div>
      </div>
    </>
  );
}