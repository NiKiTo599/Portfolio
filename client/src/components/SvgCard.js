import React from "react";

export default class SvgCard extends React.Component {
  render() {
    return (
      <svg class="svg" width='100%' height='100%'>
        <symbol id="s-tile">
          <g>
            <rect width="400" height="400" fill="lightseagreen"></rect>
            <rect width="375" height="375" fill="lightgreen"></rect>
            <rect width="350" height="350" fill="gold"></rect>
            <rect width="325" height="325" fill="sandybrown"></rect>
            <rect width="300" height="300" fill="salmon"></rect>

            <rect width="275" height="275" fill="lightseagreen"></rect>
            <rect width="250" height="250" fill="lightgreen"></rect>
            <rect width="225" height="225" fill="gold"></rect>
            <rect width="200" height="200" fill="sandybrown"></rect>
            <rect width="175" height="175" fill="salmon"></rect>

            <rect width="150" height="150" fill="lightseagreen"></rect>
            <rect width="125" height="125" fill="lightgreen"></rect>
            <rect width="100" height="100" fill="gold"></rect>
            <rect width="75" height="75" fill="sandybrown"></rect>
            <rect width="50" height="50" fill="salmon"></rect>
          </g>
        </symbol>

        <pattern id="pattern" width="50%" height="50%" patternTransform='rotate(45, 250, 150)'>
          <use href="#s-tile"></use>

          <rect
            width="100%"
            height="100%"
            fill="none"
            stroke="darkslategrey"
            stroke-width="4"
          ></rect>
        </pattern>

        <pattern
          id="pattern-2"
          href="#pattern"
          viewBox="0 0 150 150"
          preserveAspectRatio="none"
          width="18%"
          height="30%"
        >
          {" "}
        </pattern>

        <use href="#s-coords" stroke="#333"></use>

        <g>
          <rect
            width="100%"
            height="100%"
            x="0%"
            fill="url(#pattern-2)"
            fill-opacity=".75"
          ></rect>
        </g>
      </svg>
    );
  }
}
