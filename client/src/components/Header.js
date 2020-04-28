import React from "react";
import Scroll from "./transition/Scroll";

export default class Header extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <>
      <section id='header' className="container-header">
        <p>
          <span className="container-header__second-text fadeInDown wow" >{t("header.welcome_text")}</span>
          <br />
          <span className="container-header__main-text zoomIn wow">
            {t("header.main")}
          </span>
          <br />
          <span className="container-header__second-text fadeInUp wow">{t("header.about")}</span>
        </p>
        <Scroll scroll='down'/>
        <Scroll scroll='up'/>
      </section>
      <section className="blue"></section>
      </>
    );
  }
}
