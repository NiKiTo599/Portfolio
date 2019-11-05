import React from "react";
import Svg from "./Svg";
import Items from "./whatIDo/Items";

export default class ThisWhatIDo extends React.Component {
  render() {
    return (
      <div className="row align-items-center">
        <div className="col-xl-1">
          <Svg heightForSvg="652" />
        </div>
        <div className="col-xl-11 what_i_do-container">
          <Items t={this.props.t}/>
        </div>
      </div>
    );
  }
}
