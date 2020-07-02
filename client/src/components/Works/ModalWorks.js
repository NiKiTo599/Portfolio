import React from "react";
import { Modal, Button } from "react-bootstrap";
import ButtonForLinks from "./ButtonForLinks";

const ModalWorks = ({ data, t, onHide, show, width }) => (
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
            <p>{t("works.more.title")}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="more_about_project">
            <h4>{data.name}</h4>
            {data.customer ? (
              <p>
                <span>{t("works.more.customer")}:</span>
                {data.customer}
              </p>
            ) : null}
            <p>
              <span>{t("works.more.stack")}:</span>
              <div className="more_about_project__stack">
                {data.stack.map((item) => (
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
            <div className="more_about_project__description">
              <span className="title">{t("works.more.description")}:</span>
              {data.description.map((item, idx) =>
                typeof item === "string" ? (
                  <p>{t(`works.more.description_text.${item}.${idx + 1}`)}</p>
                ) : (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {t(`works.more.description_text.${item.text}.${idx + 1}`)}
                  </a>
                )
              )}
            </div>
            <ButtonForLinks
              link1={data.link}
              link2={data.repository}
              svg={data.link ? "link" : "repository"}
            />
            <img src={require(`../../data/images/works/${data.img}`)} alt="" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    ) : null}
  </>
);

export default ModalWorks;
