import React from "react";
import $ from 'jquery'

import Svg from "./Svg";
import Items from "./whatIDo/Items";

export default class ThisWhatIDo extends React.Component {
  state = {
    height: 0,
  }

  componentDidMount = () => {
    const height = $('.skils-container').height();
    this.setState({ height: height + 52 })
  }
  render() {
    return (
      <div className="row align-items-center">
        <div className="col-xl-1">
          <Svg heightForSvg={this.state.height} />
        </div>
        <div className="col-xl-10 what_i_do-container">
          <Items t={this.props.t}/>
        </div>
        <div className="col-xl-1">
          <Svg heightForSvg={this.state.height} />
        </div>
      </div>
    );
  }
}
