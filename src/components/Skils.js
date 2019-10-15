import React from "react";

export default class Skils extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <div>
        <p>{t('skils.text')}</p>
      </div>
    );
  }
}
