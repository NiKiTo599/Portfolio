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
    const { t } = this.props;
    return (
      <div className="row align-items-center">
        <div className="col-xl-1">
          <Svg heightForSvg={this.state.height}/>
        </div>
        <div className="col-xl-10 skils-container">
          <Items t={t} />
        </div>
        <div className="col-xl-1">
          <Svg heightForSvg={this.state.height}/>
        </div>
      </div>
    );
  }
}
