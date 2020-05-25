import React from "react";
import $ from "jquery";

import Svg from "./Svg";
import Items from "./whatIDo/Items";

export default class ThisWhatIDo extends React.Component {
  state = {
    height: 0,
  };

  componentDidMount = () => {
    const height = $(".skils-container").height();
    this.setState({ height: height + 52 });
  };
  render() {
    const { width } = this.props;
    return (
      <div className="row justify-content-center align-items-center">
        {width >= 1210 ? (
          <div className="col-xl-1">
            <Svg heightForSvg={this.state.height} />
          </div>
        ) : null}
        <div className="col-xl-10 col-lg-12 col-md-12 col-12 what_i_do-container">
          <Items t={this.props.t} />
        </div>
        {width >= 1210 ? (
          <div className="col-xl-1">
            <Svg heightForSvg={this.state.height} />
          </div>
        ) : null}
      </div>
    );
  }
}
