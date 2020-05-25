import React from "react";
import $ from "jquery";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const links = [
  {
    href: "header",
    name: "Home",
  },
  {
    href: "about",
    name: "About me",
  },
  {
    href: "whatIdo",
    name: "What",
  },
  {
    href: "skils",
    name: "Skils",
  },
  {
    href: "works",
    name: "Works",
  },
  {
    href: "contact",
    name: "Con",
  },
];

export default class Navigate extends React.Component {
  constructor() {
    super();
    this.width = window.screen.width;
  }
  componentDidMount = () => {
    console.log(this.width)
    if (this.width >= 800) {
      $(window).scroll((e) => {
        links.forEach((el) => {
          if (
            $(window).scrollTop() >
            $(`#${el.href}`).offset().top - 2 * $(`#${el.href}`).height()
          ) {
            if (this.prev) {
              $(this.prev).toggleClass("nav-link__active");
            }
            this.prev = `a[href="#${el.href}"]`;
            $(`a[href="#${el.href}"]`).toggleClass("nav-link__active");
          }
        });
      });
    }
  };

  render() {
    return (
      <Navbar id="primary" sticky="top" bg="primary" variant="dark">
        {this.width < 800 ? (
          <>
            <Nav>
              <NavDropdown id="dropdown" title={<FontAwesomeIcon icon={faBars} />}>
                <NavDropdown.Item href="#header">Home</NavDropdown.Item>
                <NavDropdown.Item href="#about">About me</NavDropdown.Item>
                <NavDropdown.Item href="#whatIdo">Services</NavDropdown.Item>
                <NavDropdown.Item href="#skils">Skills</NavDropdown.Item>
                <NavDropdown.Item href="#works">Works</NavDropdown.Item>
                <NavDropdown.Item href="#contact">Contact me</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Navbar.Brand href="#header">
              <span>NiKiTo5</span>99
            </Navbar.Brand>
          </>
        ) : (
          <>
            <Navbar.Brand href="#header">
              <span>NiKiTo5</span>99
            </Navbar.Brand>
            <Nav>
              <Nav.Link href="#header">Home</Nav.Link>
              <Nav.Link href="#about">About me</Nav.Link>
              <Nav.Link href="#whatIdo">Services</Nav.Link>
              <Nav.Link href="#skils">Skills</Nav.Link>
              <Nav.Link href="#works">Works</Nav.Link>
              <Nav.Link href="#contact">Contact me</Nav.Link>
            </Nav>
          </>
        )}
      </Navbar>
    );
  }
}
