import React from "react";
import $ from 'jquery'

import Svg from "./Svg"
import Items from "./skils/Items";

export default class Skils extends React.Component {

  state = {
    height: 0,
  }

  componentDidMount = () => {
    const height = $('.skils-container').height();
    this.setState({ height: height + 52 })
  }

  render() {
    const { t, width } = this.props;
    return (
      <div className="row align-items-center">
        {width >= 1210 ? (
          <div className="col-xl-1">
            <Svg heightForSvg={this.state.height} />
          </div>
        ) : null}
        <div className="col-xl-10 col-lg-12 skils-container">
          <Items t={t} />
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
