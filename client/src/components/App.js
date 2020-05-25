import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import $ from "jquery";
import Helmet from "react-helmet";
import WOW from "wowjs";

import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import "../styles/style.scss";
import ChangeLanguage from "./ChangeLanguage";
import Skils from "./Skils";
import Header from "./Header";
import PersonalInfo from "./PersonalInfo";
import ThisWhatIDo from "./ThisWhatIDo";
import MyWorks from "./MyWorks";
import DropMeALine from "./DropMeALine";
import Navigate from "./Navigate";
import Footer from "./Footer";
import Title from "./Title";

class App extends Component {
  componentDidMount = () => {
    const wow = new WOW.WOW();
    wow.init();
    $(window).scroll(e => {
      if ($(window).scrollTop() > $(window).height()) {
        $(".transition-container-up").css({ opacity: ".25" });
      }
      if ($(window).scrollTop() > $(window).height() + 25) {
        $(".transition-container-up").css({ opacity: ".5" });
      }
      if ($(window).scrollTop() > $(window).height() + 50) {
        $(".transition-container-up").css({ opacity: "1" });
      }
      if ($(window).scrollTop() < $(window).height() - 50) {
        $(".transition-container-up").css({ opacity: "0" });
      }
    });
  };

  render() {
    const { t, i18n } = this.props;
    const { width } = window.screen;
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>My portfolio</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
          />
          <link rel="stylesheet" href="animate.min.css"></link>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
          ></link>
        </Helmet>
        <Header t={t} />
        <ChangeLanguage i18n={i18n} />
        <main id="begin" className="container_for_container">
          <Navigate />
          <section className="container justify-content-center">
            <Title text={t("titles.about")}/>
            <PersonalInfo t={t} width={width}/>
            <h2
              id="whatIdo"
              className="container__title wow fadeInUp"
              data-wow-delay="0.5s"
            >
              {t("titles.whatIdo")}
            </h2>
            <ThisWhatIDo t={t} width={width}/>
            <h2 id="skils" className="container__title wow fadeInUp">
              {t("titles.skils")}
            </h2>
            <Skils t={t} width={width} />
            <h2 id="works" className="container__title wow fadeInUp">
              {t("titles.myworks")}
            </h2>
            <MyWorks t={t} width={width} />
            <h2 id="contact" className="container__title wow fadeInUp">
              {t("titles.drop")}
            </h2>
            <DropMeALine t={t} width={width} />
          </section>
        </main>
        <Footer />
      </>
    );
  }
}
export default withTranslation("common")(App);
