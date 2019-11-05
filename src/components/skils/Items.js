import React from "react"

const Items = props => (
  <div className="skils-container__container_for_items">
    <div className="container_for_items__item container_for_items__item__blue">
      <h4>Frontend Development</h4>
      <p>{props.t("skils.text1")}</p>
    </div>
    <div className="container_for_items__item">
      <h4>UI/UX Design</h4>
      <p>{props.t("skils.text2")}</p>
    </div>
    <p className="container_for_items__paragraph container_for_items__item__blue">{props.t("skils.text")}</p>
    <div className="container_for_items__item align-self">
      <h4>Web Development</h4>
      <p>{props.t("skils.text2")}</p>
    </div>
    <div className="container_for_items__item container_for_items__item__blue">
      <h4>Consulting & SEO Audit</h4>
      <p>{props.t("skils.text2")}</p>
    </div>
  </div>
);

export default Items;