import React from "react";
import Svg from "./Svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import ButtonsPersonal from "./personal/Buttons";
//

export default class PersonalInfo extends React.Component {
  downloadClick = () => {
    fetch("/api/download");
  };

  render() {
    const { t, width } = this.props;
    return (
      <div className="row align-items-center justify-content-center wow fadeInUp">
        {width >= 1210 ? (
          <div className="col-xl-1">
            <Svg heightForSvg="572" />
          </div>
        ) : null}
        <div className="col-xl-10 personal_container">
          <div className="container-personal__left fadeIn wow">
            <p className="left__main-text">{t("personal.text")}</p>
            <ul className="left__list-contacts">
              <li>
                <span>{t("personal.phone")}: </span>+375293480108
              </li>
              <li>
                <span>Email: </span>akulichnikita0@gmail.com
              </li>
              <li>
                <span>{t("personal.adress_label")}:</span>{" "}
                {t("personal.adress")}
              </li>
              <li>
                <span>{t("personal.social")}: </span>
                <div className="list-contacts__social">
                  <a
                    href="https://github.com/NiKiTo599"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nikita-akulich-489b1018a/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a
                    href="https://www.t.me/nikita_shark/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faTelegram} />
                  </a>
                </div>
              </li>
            </ul>
            <ButtonsPersonal t={t} width={width} />
          </div>
          <div className="container-personal__right fadeIn wow">
            <img
              src={require("../data/images/foto1.JPG")}
              alt="my personal foto"
            />
          </div>
        </div>
        {width >= 1210 ? (
          <div className="col-xl-1">
            <Svg heightForSvg="572" />
          </div>
        ) : null}
      </div>
    );
  }
}
