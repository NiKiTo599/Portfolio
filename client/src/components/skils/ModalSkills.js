import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalSkills = ({ data, t, onHide, show, width }) => (
  <>
    {data ? (
      <Modal
        show={show}
        onHide={onHide}
        size={width >= 450 ? "lg" : "sm"}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <p>{t("skills.more.title")}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="more_about_project">
            <p>
              <div className="more_about_project__stack">
                {data.map((item) => (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://www.google.com/search?q=${item}`}
                  >
                    <div className="stack__item">
                      <span>{item}</span>
                    </div>
                  </a>
                ))}
              </div>
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    ) : null}
  </>
);

export default ModalSkills;