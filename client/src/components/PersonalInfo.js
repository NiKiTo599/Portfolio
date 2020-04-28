import React from "react";
import { Button } from 'react-bootstrap'
import Svg from "./Svg";

export default class PersonalInfo extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <div className="row align-items-center wow fadeInUp">
        <div className="col-xl-1">
          <Svg heightForSvg="572"/>
        </div>
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
                <span>{t("personal.adress_label")}</span>: {t("personal.adress")}
              </li>
              <li>
                <span>{t("personal.social")}: </span>
              </li>
            </ul>
            <div className="left__buttons">
              <Button className='heartBeat wow' data-wow-delay="0.5s" variant="primary">{t("personal.contactme")}</Button>
              <Button className='heartBeat wow' data-wow-delay="0.5s" variant="secondary">{t("personal.download")}</Button>
            </div>
          </div>
          <div className="container-personal__right fadeIn wow">
            <img src={require('../data/images/foto1.JPG')} alt="my personal foto"/>
          </div>
        </div>
        <div className="col-xl-1">
          <Svg heightForSvg="572"/>
        </div>
      </div>
    );
  }
}
