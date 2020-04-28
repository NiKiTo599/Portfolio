import React from "react";

export default class ChangeLanguage extends React.Component {
  constructor(props) {
    super(props);
    this.i18n = this.props.i18n;
    this.en = 'container-change_language__button container-change_language__button__active';
    this.ru = 'container-change_language__button';
  }
  changeLang = (lng) => {
    let r = null;
    r = this.en;
    this.en = this.ru;
    this.ru = r;
    this.i18n.changeLanguage(lng);
  }
  render() {
    return (
      <div className="container-change_language">
        <button className={`fadeInLeft wow ${this.en}`} onClick={this.changeLang.bind(this, 'en')}>en</button>
        <button className={`fadeInRight wow ${this.ru}`} onClick={this.changeLang.bind(this, 'ru')}>ru</button>
      </div>
    );
  }
}
