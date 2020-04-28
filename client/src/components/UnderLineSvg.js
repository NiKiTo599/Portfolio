import React from "react";

const Svg = props => (
  <svg className="heartBeat wow" width="90" height={`${props.heightForSvg}`}>
    <polyline
      stroke="#0D2240"
      fill="none"
      stroke-width="6px"
      points=''
    />
  </svg>
);

export default Svg;