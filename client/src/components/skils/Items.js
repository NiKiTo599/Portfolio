import React, { useState } from "react";
import ModalSkills from "./ModalSkills";

const frontend = [
  "HTML",
  "CSS",
  "SASS",
  "React",
  "Redux",
  "TypeScript",
  "Vue",
  "Vuex",
  "Bootstrap",
  "Element-UI",
  "Gatsby.js",
  "JQuery",
  "GraphQL",
  "Three.js",
  "Canvas API",
  "PostCSS",
  "Webpack",
  "Git",
  "OOP",
  "JSON API"
];

const backend = [
  "Node.js",
  "Express",
  "MongoDB",
  "GraphQL",
  "REST API",
  "AJAX",
  "Apolo cerver",
  "NodeMailer",
  "Git",
  "SQL",
  "JSON API"
];

const Items = ({ t, width }) => {
  const [isShowFront, setShowFront] = useState(false);
  const [isShowBack, setShowBack] = useState(false);
  return (
    <>
      <div className="skils-container__container_for_items">
        <div
          className="container_for_items__item container_for_items__item__blue fadeInLeft wow"
          onClick={() => setShowFront(true)}
        >
          <h4>Frontend Development</h4>
          <p className="hide">{`${frontend.slice(0, 9).join(", ")}...`}</p>
        </div>
        <div className="container_for_items__item fadeInRight wow">
          <h4>UI/UX Design</h4>
          <p>{t("skils.text2")}</p>
        </div>
        <p className="container_for_items__paragraph container_for_items__item__blue heartBeat wow">
          {t("skils.text")}
        </p>
        <div className="container_for_items__item align-self fadeInLeft wow">
          <h4>Web Development</h4>
          <p>{t("skils.text2")}</p>
        </div>
        <div className="container_for_items__item container_for_items__item__blue fadeInRight wow">
          <h4>Backend Development</h4>
          <p className="hide">{`${backend.slice(0, 9).join(", ")}...`}</p>
        </div>
      </div>
      <ModalSkills
        data={frontend}
        show={isShowFront}
        width={width}
        t={t}
        onHide={() => setShowFront(false)}
      />
      <ModalSkills
        data={backend}
        show={isShowBack}
        width={width}
        t={t}
        onHide={() => setShowBack(false)}
      />
    </>
  );
};

export default Items;
