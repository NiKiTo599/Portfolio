import React from "react";

const Title = (props) => (
  <header>
    <h2 id="about" className="container__title wow fadeInUp">
      {props.text}
    </h2>
  </header>
);

export default Title;