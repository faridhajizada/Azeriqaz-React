import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { KTIcon } from "./../../../../../../_metronic/helpers";

function CreateModal() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const openModalCreate = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    closeModal();
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={openModalCreate}
      >
        <KTIcon iconName="plus" className="fs-2" /> Yeni istifadəçi yarat
      </button>

      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Yeni istifadəçi yarat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Ad</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <div className="d-flex justify-content-end ">
              <Button variant="primary" type="submit" className="me-2">
                Bağla
              </Button>
              <Button variant="primary" type="submit">
                Yarat
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CreateModal;
