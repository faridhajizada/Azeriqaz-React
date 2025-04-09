import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import "./Create.scss";

function Create() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    categoryName: "",
    highCategory: "",
    status: "",
  });

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    closeModal();
  };

  return (
    <>
      <Button variant="primary" onClick={openModal}>
        <i className="ki-duotone ki-plus fs-2"></i> Yeni Kateqoriya yarat
      </Button>

      <Modal show={showModal} onHide={closeModal} centered size="sm">
        <Modal.Header closeButton className="bg-primary ">
          <Modal.Title className="text-white">Yeni Avtomobil yarat</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <div className="row">
              <Form.Group className="col-md-12 mb-3">
                <Form.Label>Kateqoriya adı *</Form.Label>
                <Form.Control
                  type="text"
                  name="brand"
                  value={formData.categoryName}
                  onChange={handleChange}
                  placeholder="Kateqoriya adı"
                  required
                />
              </Form.Group>

              <Form.Group className="col-md-12 mb-3">
                <Form.Label>Üst kateqorya</Form.Label>
                <Form.Control
                  type="text"
                  name="serialNumber"
                  value={formData.highCategory}
                  onChange={handleChange}
                  placeholder="Üst kateqorya"
                />
              </Form.Group>
              <Form.Group className="col-md-12 mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Control
                  type="text"
                  name="Status"
                  value={formData.status}
                  onChange={handleChange}
                  placeholder="Status"
                />
              </Form.Group>
            </div>

            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal}>
                Bağla
              </Button>
              <Button variant="primary" type="submit">
                Yadda saxla
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Create;
