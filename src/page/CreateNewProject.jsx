import { useRef, useState } from "react";

import Button from "../components/Button";
import Input from "../components/Input";

export default function CreateNewProject({ noProjectHandler, addProjectFn }) {
  const refTitle = useRef();
  const refDescription = useRef();
  const refDueDate = useRef();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(new Date().toLocaleDateString("en-us"));

  function handleCreateProject() {
    addProjectFn({
      title: title,
      description: description,
      dueDate: dueDate,
      tasks: []
    });
    noProjectHandler();
  }

  return (
    <form className="">
      <div className="text-right pr-6">
        <Button archetype="cancel" onClick={noProjectHandler}>Cancel</Button>
        <Button archetype="save" onClick={handleCreateProject}>Save</Button>
      </div>
      <Input ref={refTitle} label="Title" onChange={(e) => setTitle(e.target.value)} required/>
      <Input ref={refDescription} label="Description" type="textarea" onChange={(e) => setDescription(e.target.value)} />
      <Input ref={refDueDate} label="Due Date" defaultValue={dueDate} type="date" onChange={(e) => setDueDate(e.target.value)} required/>
    </form>
  );
}