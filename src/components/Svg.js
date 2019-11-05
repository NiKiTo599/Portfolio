import React from "react";

function points(height, beg) {
  let result = '';
  let x = 10 + beg + 1;
  for (let i = 10; i < height; i+=80) {
    if (x !== 10 + beg) {
      x = 10 + beg
    } else {
      x = 10 + beg + 40;
    };
    result += `${x},${i} `;
  }
  console.log(result)
  return result;
}

points(572, 0)

const Svg = (props) => (
  <svg width="90" height={`${props.heightForSvg}`}>
    <polyline
      stroke="#0D2240"
      fill="none"
      stroke-width="6px"
      points={points(props.heightForSvg, 0)}
    />
    <polyline
      stroke="#2867BF"
      fill="none"
      stroke-width="6px"
      points={points(props.heightForSvg, 10)}
    />
    <polyline
      stroke="#C2B400"
      fill="none"
      stroke-width="6px"
      points={points(props.heightForSvg, 20)}
    />
    <polyline
      stroke="#307CE6"
      fill="none"
      stroke-width="6px"
      points={points(props.heightForSvg, 30)}
    />
  </svg>
);

export default Svg;