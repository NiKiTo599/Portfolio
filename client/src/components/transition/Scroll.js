import React from "react";
import $ from "jquery";

export default class Scroll extends React.Component {
  componentDidMount = () => {
    $(function() {
      $('a[href^="#"]').on("click", function(event) {
        event.preventDefault();
        const sc = $(this).attr("href");
        const dn = $(sc).offset().top;

        $("html, body").animate({ scrollTop: dn }, 1000);
      });
    });
  };

  render() {
    const { scroll } = this.props;
    if (scroll === "down") {
      return (
        <a href="#begin" className="transition-container-down fadeIn wow">
          <div className="transition-container__circle">
            <i className="fa fa-angle-down fa-2x"></i>
          </div>
        </a>
      );
    } else if (scroll === "up") {
      return (
        <a href="#header" className="transition-container-up">
          <div className="transition-container__square">
            <i className="fa fa-angle-up fa-2x"></i>
          </div>
        </a>
      );
    }
  }
}
