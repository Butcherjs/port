import React from 'react';
import Sketch from 'react-p5';

let angle = 0;
let targetangle = 0;

function P5Sketch() {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(200, 200, p5.WEBGL).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.clear();
    p5.background(29,31,33);

    angle = p5.lerp(angle, targetangle, 0.5);
    p5.rotateX(angle);
    p5.rotateY(angle);
    p5.rotateZ(angle);
    
    p5.box(100);

    targetangle += 0.02;
  };

  return (
    <Sketch setup={setup} draw={draw} />
  );
}

export default P5Sketch;
