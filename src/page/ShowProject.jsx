import { useState } from "react";
import Button from "../components/Button";

export default function ShowProject({ currentproject, deleteProjectFn, showNoProjectSelectedHandler }) {
  const dateOptions = {
    month: 'short', 
    day: 'numeric'
  }

  function formatDate(date) {
    return date.toLocaleDateString("en-us", dateOptions) + ", " + date.getFullYear();
  }

  function set

  function onClickDeleteButton(e) {
    deleteProjectFn(currentproject.id);
    showNoProjectSelectedHandler();
  }

  return (
    <div className="px-4">
      <h1 className="text-3xl font-bold text-maroon float-left">{currentproject.title}</h1>
      <div className="float-right">
        <Button archetype="cancel" handler={onClickDeleteButton}>Delete</Button>
      </div>
      <div className="clear-both">
        <p className="text-classygrey">{formatDate(currentproject.dueDate)}</p>
        <p className="py-2 leading-loose">{currentproject.description}</p>
      </div>
    </div>
  );
}