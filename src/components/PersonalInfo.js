import React from "react";
import { Button } from 'react-bootstrap'

export default class PersonalInfo extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <div className="row">
        <div className="col-xl-2">
          <svg width="120" height="600px">
            <polyline
              stroke="black"
              fill="none"
              stroke-width="12px"
              points="10,10 50,80 10,160 50,240 10,320 50,400 10,480 50,560"
            />
            <polyline
              stroke="#C0BFBF"
              fill="none"
              stroke-width="12px"
              points="30,10 70,80 30,160 70,240 30,320 70,400 30,480 70,560"
            />
            <polyline
              stroke="#C0BFBF"
              fill="none"
              stroke-width="12px"
              points="50,10 90,80 50,160 90,240 50,320 90,400 50,480 90,560"
            />
            <polyline
              stroke="black"
              fill="none"
              stroke-width="12px"
              points="70,10 110,80 70,160 110,240 70,320 110,400 70,480 110,560"
            />
          </svg>
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
              <Button variant="primary"></Button>
            </div>
          </div>
          <div className="container-personal__right">
            <img src={require('../data/images/foto.jpg')}/>
          </div>
        </div>
      </div>
    );
  }
}
