import React from "react";
import SvgCard from "../SvgCard";

const Items = props => (
  <div className="what_i_do-container__container_for_items">
    <div className="container_for_items__item fadeInLeft wow">
      <h4>Web Design</h4>
      <p>{props.t("items.text1")}</p>
    </div>
    <div className="container_for_items__item container_for_items__item__blue fadeInRight wow">
      <div className="go-to-up"></div>
      <div className="go-to-down"></div>
      <SvgCard />
    </div>
    <p className="container_for_items__paragraph heartBeat wow">{props.t("items.text")}</p>
    <div className="container_for_items__item container_for_items__item__blue fadeInLeft wow">
      <div className="go-to-up"></div>
      <div className="go-to-down"></div>
      <SvgCard />
    </div>
    <div className="container_for_items__item align-self fadeInRight wow">
      <h4>Web Programming</h4>
      <p>{props.t("items.text2")}</p>
    </div>
  </div>
);

export default Items;
