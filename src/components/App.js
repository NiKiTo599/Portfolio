import React, { Component } from "react";
import { withTranslation, Trans } from "react-i18next";

import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import "../styles/style.scss";
import ChangeLanguage from "./ChangeLanguage";
import Skils from "./Skils";
import Header from "./Header";
import PersonalInfo from "./PersonalInfo";

class App extends Component {
  render() {
    const { t, i18n } = this.props;
    return (
      <>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <Header t={t} />
        <ChangeLanguage i18n={i18n} />
        <section className="container">
          <PersonalInfo t={t}/>
        </section>
      </>
    );
  }
}
export default withTranslation("common")(App);
