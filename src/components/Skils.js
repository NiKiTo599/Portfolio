import React from "react";

import Svg from "./Svg"
import Items from "./skils/Items";

export default class Skils extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <div className="row align-items-center">
        <div className="col-xl-2">
          <Svg heightForSvg="732"/>
        </div>
        <div className="col-xl-10 skils-container">
          <Items t={t} />
        </div>
      </div>
    );
  }
}
