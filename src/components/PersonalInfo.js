import React from "react";

export default class PersonalInfo extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <div className="row">
        <div className="col-xl-12">
          <svg width='30px' height='30px'></svg>
          <p>{t('personal.text')}</p>
          <ul>
            <li><span>{t('personal.phone')}:</span>+375293480108</li>
            <li><span>Email:</span>akulichnikita0@gmail.com</li>
            <li><span>{t('personal.adress_label')}</span>:{t('personal.adress')}</li>
            <li><span>{t('personal.social')}:</span></li>
          </ul>
        </div>
      </div>
    );
  }
}