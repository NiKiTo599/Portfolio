import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./button.scss";
const svgs = {
  repository: faGithub,
  link: faExternalLinkAlt,
};



const ButtonForLinks = ({ link1, link2, svg }) => (
  <div className="container-for-links">
    {link2 ? (
      <>
        <a
          href={link1}
          target="_blank"
          className="links links__left"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={svgs.link} />
        </a>
        <a
          href={link2}
          target="_blank"
          className="links links__right"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={svgs.repository} />
        </a>
      </>
    ) : <a
    href={link1 || link2}
    target="_blank"
    className="links links__alone"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={svgs[svg]} />
  </a>}
  </div>
);

export default ButtonForLinks;
