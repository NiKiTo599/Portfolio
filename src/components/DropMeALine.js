import React from "react";
import { Form, Button } from "react-bootstrap";

export default class MyWorks extends React.Component {
  render() {
    const t = this.props.t;
    return (
      <div className="row justify-content-between">
        <div className="col-xl-12">
          <Form method="post">
            <Form.Group controlId="formBasicName">
              <Form.Label>{t("form.name-label")}</Form.Label>
              <Form.Control type="text" placeholder={`${t('form.name-placeholder')}`} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>{t('form.email-label')}</Form.Label>
              <Form.Control type="email" placeholder={`${t('form.email-placeholder')}`} />
              <Form.Text className="text-muted">
                I'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Label>{t('form.message-label')}</Form.Label>
              <Form.Control placeholder={`${t('form.message-placeholder')}`} as="textarea" rows="3" />
            </Form.Group>
            <Button variant="primary" type="submit">
              {t('form.submit')}
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
