import React from "react";

export default class Header extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <>
      <section className="container-header">
        <p>
          <span className="container-header__second-text">{t("header.welcome_text")}</span>
          <br />
          <span className="container-header__main-text">
            {t("header.main")}
          </span>
          <br />
          <span className="container-header__second-text">{t("header.about")}</span>
        </p>
      </section>
      <section className="blue"></section>
      </>
    );
  }
}
