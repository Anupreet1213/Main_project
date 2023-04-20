import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDiv from "./DragDiv";

const Draggable = () => {
  return (
    <>
      <div className="draggable">
        <div>HOW TO BUY</div>
        <h2>HOW DO YOU BUY CGPT TOKEN IN THE PRESALE?</h2>
      </div>
      <DragDiv />
    </>
  );
};

export default Draggable;
