import React from "react";
import { Modal, Button } from "react-bootstrap";

import json from "../data/works.json";

function MyVerticallyCenteredModal(props) {
  if (props.data === null) return null;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          More abiut project
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.data.name}</h4>
        <p>{props.data.name}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default class MyWorks extends React.Component {
  state = {
    works: json.works,
    show: false,
    data: null,
    animateStyles: [
      'wow fadeInLeft',
      'wow fadeInRight'
    ]
  };

  changeShowWorks = e => {
    const { target } = e;
    const { id } = target;
    document
      .querySelector(".list__item__active")
      .classList.remove("list__item__active");
    target.classList.toggle("list__item__active");
    if (id === "all") {
      this.setState({
        works: json.works
      });
    } else if (id === "com") {
      this.setState({
        works: json.works.filter(i => i.type === "com")
      });
    } else {
      this.setState({
        works: json.works.filter(i => i.type === "own")
      });
    }
  };
  changeShow = e => {
    console.log(e.target);
    this.setState({
      show: !this.state.show,
      data: this.state.works[+e.currentTarget.id]
    });
  };

  render() {
    console.log(json);
    return (
      <div className="row justify-content-between">
        <div className="col-xl-12">
          <ul onClick={this.changeShowWorks} className="my_works__list">
            <li id="all" className="list__item list__item__active">
              All projects
            </li>
            <li id="com" className="list__item">
              Commercial projects
            </li>
            <li id="own" className="list__item">
              Own projects
            </li>
          </ul>
        </div>
        {this.state.works.map((i, index) => {
          if ((index + 2) % 2 === 0) {
            this.anim = 0;
          } else {
            this.anim = 1;
          }
          return (
            <div
              id={index}
              className={`col-xl-6 my_works__item ${this.state.animateStyles[this.anim]}`}
              onClick={e => this.changeShow(e)}
            >
              <img src={require(`../data/images/works/${i.img}`)} alt={i.name} />
              <h4>{i.name}</h4>
              <span>{i.date}</span>
            </div>
          )
        })}

        <MyVerticallyCenteredModal
          show={this.state.show}
          onHide={e => this.changeShow(e)}
          data={this.state.data}
        />
      </div>
    );
  }
}
