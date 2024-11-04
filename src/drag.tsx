import { useState } from "react";
import Draggable from "react-draggable";

const Drag = () => {
  const [activeDrags, seActiveDrags] = useState<number>(0);
  const onStop = () => {
    seActiveDrags((prev) => prev - 1);
  };
  const onStart = () => {
    seActiveDrags((prev) => prev + 1);
  };
  const dragHandlers = { onStart, onStop };
  return (
    <div>
      <h1>React Draggable</h1>
      <Draggable {...dragHandlers}>
        <div className="box">I can be dragged anywhere</div>
      </Draggable>
    </div>
  );
};
export default Drag;
