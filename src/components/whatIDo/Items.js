import React from "react";

const Items = props => (
  <div className="what_i_do-container__container_for_items">
    <div className="container_for_items__item">
      <h4>Web Design</h4>
      <p>{props.t("items.text1")}</p>
    </div>
    <div className="container_for_items__item container_for_items__item__blue"></div>
    <p className="container_for_items__paragraph">{props.t("items.text")}</p>
    <div className="container_for_items__item container_for_items__item__blue"></div>
    <div className="container_for_items__item align-self">
      <h4>Web Programming</h4>
      <p>{props.t("items.text2")}</p>
    </div>
  </div>
);

export default Items;
