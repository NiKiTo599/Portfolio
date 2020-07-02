import React from "react";
import { Tab, ListGroup } from "react-bootstrap";

import json from "../data/works.json";
import ModalWorks from "./Works/ModalWorks";
export default class MyWorks extends React.Component {
  state = {
    works: json.works,
    show: false,
    data: null,
    animateStyles: ["wow fadeInLeft", "wow fadeInRight"],
    page: 1,
  };

  changeShowWorks = (e) => {
    const { target } = e;
    const { id } = target;
    document
      .querySelector(".list__item__active")
      .classList.remove("list__item__active");
    target.classList.toggle("list__item__active");
    if (id === "all") {
      this.setState({
        works: json.works,
      });
    } else if (id === "com") {
      this.setState({
        works: json.works.filter((i) => i.type === "com"),
      });
    } else {
      this.setState({
        works: json.works.filter((i) => i.type === "own"),
      });
    }
  };
  changeShow = (e) => {
    this.setState({
      show: !this.state.show,
      data: e ? this.state.works[+e.currentTarget.id] : null,
    });
  };

  render() {
    const { t, width } = this.props;
    const pages = Math.ceil(this.state.works.length / 4);
    const arrayOfPages = new Array(pages).fill(0).map((item, idx) => idx + 1);
    return (
      <>
        <Tab.Container defaultActiveKey="#page1">
          <div className="row justify-content-between">
            <div className="col-xl-12 col-12">
              <ul onClick={this.changeShowWorks} className="my_works__list">
                <li id="all" className="list__item list__item__active">
                  {t("works.allProjects")}
                </li>
                <li id="com" className="list__item">
                  {t("works.commercialProjects")}
                </li>
                <li id="own" className="list__item">
                  {t("works.ownProjects")}
                </li>
              </ul>
            </div>
            <Tab.Content>
              {// We will take only 4 works for one Tab Pane
              arrayOfPages.map((item) => (
                <>
                  <Tab.Pane eventKey={`#page${item}`}>
                    <div className="works__container">
                      {this.state.works
                        .slice(item * 4 - 4, 4 * item)
                        .map((i, index) => {
                          if ((index + 2) % 2 === 0) {
                            this.anim = 0;
                          } else {
                            this.anim = 1;
                          }
                          return (
                            <div
                              id={index}
                              className={`my_works__item ${
                                this.state.animateStyles[this.anim]
                              }`}
                              onClick={(e) => this.changeShow(e)}
                            >
                              <img
                                src={require(`../data/images/works/${i.img}`)}
                                alt={i.name}
                              />
                              <h4>{i.name}</h4>
                              <span>{i.date}</span>
                            </div>
                          );
                        })}
                    </div>
                  </Tab.Pane>
                </>
              ))}
            </Tab.Content>
            <ModalWorks
              show={this.state.show}
              onHide={(e) => this.changeShow(e)}
              data={this.state.data}
              t={t}
              width={width}
            />
          </div>
          <ListGroup>
            {arrayOfPages.map((pg) => (
              <ListGroup.Item action href={`#page${pg}`}>
                {pg}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Tab.Container>
      </>
    );
  }
}
