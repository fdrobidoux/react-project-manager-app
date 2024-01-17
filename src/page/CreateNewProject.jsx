import { useRef, useState } from "react";

import Button from "../components/Button";
import Input from "../components/Input";

export default function CreateNewProject({ noProjectHandler, addProjectFn }) {
  const refTitle = useRef();
  const refDescription = useRef();
  const refDueDate = useRef();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(new Date());

  function handleCreateProject() {
    setTitle(refTitle.current.getValue());
    setDescription(refDescription.current.getValue());
    setDueDate(refDueDate.current.getValue());
    addProjectFn({
      title: refTitle.current.getValue(),
      description: refDescription.current.getValue(),
      dueDate: refDueDate.current.getValue()
    });
    noProjectHandler();
  }

  return (
    <form className="">
      <div className="text-right ">
        <Button archetype="cancel" onClick={noProjectHandler}>Cancel</Button>
        <Button archetype="save" onClick={handleCreateProject}>Save</Button>
      </div>
      <Input ref={refTitle} label="Title" />
      <Input ref={refDescription} label="Description" />
      <Input ref={refDueDate} type="date" label="Description" />
    </form>
  );
}