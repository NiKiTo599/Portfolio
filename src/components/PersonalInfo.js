import React from "react";
import { Button } from 'react-bootstrap'
import Svg from "./Svg";

export default class PersonalInfo extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <div className="row align-items-center">
        <div className="col-xl-2">
          <Svg heightForSvg="572"/>
        </div>
        <div className="col-xl-10 personal_container">
          <div className="container-personal__left">
            <p className="left__main-text">{t("personal.text")}</p>
            <ul className="left__list-contacts">
              <li>
                <span>{t("personal.phone")}: </span>+375293480108
              </li>
              <li>
                <span>Email: </span>akulichnikita0@gmail.com
              </li>
              <li>
                <span>{t("personal.adress_label")}</span>: {t("personal.adress")}
              </li>
              <li>
                <span>{t("personal.social")}: </span>
              </li>
            </ul>
            <div className="left__buttons">
              <Button variant="primary">contact me</Button>
              <Button variant="secondary">download CV</Button>
            </div>
          </div>
          <div className="container-personal__right">
            <img src={require('../data/images/foto1.JPG')} alt="my personal foto"/>
          </div>
        </div>
      </div>
    );
  }
}
