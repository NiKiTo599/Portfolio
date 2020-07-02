import React from "react";
import { Button } from 'react-bootstrap';
import Download from "@axetroy/react-download";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faDownload } from "@fortawesome/free-solid-svg-icons";

const ButtonsPersonal = ({t, width}) => (
  <div className="left__buttons">
    <a href="#contact">
      <Button className="heartBeat wow" data-wow-delay="0.5s" variant="primary">
        {width > 768 ? t("personal.contactme") : <FontAwesomeIcon icon={faMobile} />}
      </Button>
    </a>
    <Download file="../../data/resume.pdf" content="# Resume">
      <Button
        className="heartBeat wow"
        data-wow-delay="0.5s"
        variant="secondary"
      >
        {width > 768 ? t("personal.download") : <FontAwesomeIcon icon={faDownload} />}
      </Button>
    </Download>
  </div>
);

export default ButtonsPersonal;