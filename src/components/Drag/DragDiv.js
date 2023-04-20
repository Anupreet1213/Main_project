import React from "react";
import { useDrag } from "react-use-gesture";
import { useSpring, animated } from "react-spring";

const DragDiv = () => {
  const divPos1 = useSpring({ x: 0, y: 0 });
  const divPos2 = useSpring({ x: 0, y: 0 });

  const bindDivPos1 = useDrag((params) => {
    divPos1.x.set(params.offset[0]);
    divPos1.y.set(params.offset[1]);
  });
  const bindDivPos2 = useDrag((params) => {
    divPos2.x.set(params.offset[0]);
    divPos2.y.set(params.offset[1]);
  });

  return (
    <>
      <animated.div
        style={{
          x: divPos1.x,
          y: divPos1.y,
        }}
        {...bindDivPos1()}
      >
        <div className="dragDiv">
          <div className="dragChild">
            <h2>The may ways to change an SVG fill on hover</h2>
          </div>
          <p>djfbfmfsv fv db dgbfd g vbcnx b cvxj vx n bhn</p>
        </div>
        {/* <div>DragDiv</div> */}
      </animated.div>

      <animated.div
        style={{
          x: divPos2.x,
          y: divPos2.y,
        }}
        {...bindDivPos2()}
      >
        <div className="dragDiv" id="dragDiv2">
          <div className="dragChild">
            <h2>The may ways to change an SVG fill on hover</h2>
          </div>
          <p>djfbfmfsv fv db dgbfd g vbcnx b cvxj vx n bhn</p>
        </div>
        <div>DragDiv</div>
      </animated.div>
    </>
  );
};

export default DragDiv;
