import React from "react";
import { Form, Button, Popover, OverlayTrigger } from "react-bootstrap";

const popover = (
  <Popover id="popover-basic">
    <Popover.Content>
    I'll never share your email with anyone else.
    </Popover.Content>
  </Popover>
);

export default class MyWorks extends React.Component {
  state = {
    form: {
      name: "",
      email: "",
      message: ""
    },
    response: "",
    post: "",
    responseToPost: ""
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch("/api/world", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: this.state.form})
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
    console.log(this.state);
  };

  render() {
    const t = this.props.t;
    return (
      <div className="row justify-content-between">
        <div className="col-xl-12">
          <Form name="dropMeLine" onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Control
                onChange={e => {
                  const { target } = e;
                  this.setState(prevState => {
                    return {
                      form: { ...prevState.form, name: target.value }
                    };
                  });
                }}
                value={this.state.form.name}
                type="text"
                placeholder={`${t("form.name-placeholder")}`}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
              <Form.Control
                onChange={e => {
                  const { target } = e;
                  this.setState(prevState => {
                    return {
                      form: { ...prevState.form, email: target.value }
                    };
                  });
                }}
                value={this.state.form.email}
                type="email"
                placeholder={`${t("form.email-placeholder")}`}
              />
              </OverlayTrigger>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Control
                onChange={e => {
                  const { target } = e;
                  this.setState(prevState => {
                    return {
                      form: { ...prevState.form, message: target.value }
                    };
                  });
                }}
                value={this.state.form.message}
                placeholder={`${t("form.message-placeholder")}`}
                as="textarea"
                rows="3"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {t("form.submit")}
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
