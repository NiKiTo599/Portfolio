import React, { Component } from "react";
import { withTranslation } from "react-i18next";

import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import "../styles/style.scss";
import ChangeLanguage from "./ChangeLanguage";
import Skils from "./Skils";
import Header from "./Header";
import PersonalInfo from "./PersonalInfo";
import ThisWhatIDo from "./ThisWhatIDo";
import MyWorks from "./MyWorks";
import DropMeALine from "./DropMeALine"

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
        <main className="container_for_container">
          <section className="container justify-content-center">
            <h2 className="container__title">{t("titles.about")}</h2>
            <PersonalInfo t={t} />
            <h2 className="container__title">{t("titles.whatIdo")}</h2>
            <ThisWhatIDo t={t} />
            <h2 className="container__title">{t("titles.skils")}</h2>
            <Skils t={t}/>
            <h2 className="container__title">{t("titles.myworks")}</h2>
            <MyWorks t={t} />
            <h2 className="container__title">{t("titles.drop")}</h2>
            <DropMeALine t={t}/>
          </section>
        </main>
      </>
    );
  }
}
export default withTranslation("common")(App);
