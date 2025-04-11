import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import "./Create.css";

const CreateCarModal: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    permission: "",
    permissionName: "",
    module: "",
    ability: "",
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
        <i className="ki-duotone ki-plus fs-2"></i> Yeni Pozuntu yarat
      </Button>

      <Modal show={showModal} onHide={closeModal} centered size="sm">
        <Modal.Header closeButton className="bg-primary ">
          <Modal.Title className="text-white">Yeni Pozuntu yarat</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <div className="row">
              <Form.Group className="col-md-12 mb-3">
                <Form.Label>Pozuntu adı</Form.Label>
                <Form.Control
                  type="text"
                  name="permission"
                  value={formData.permission}
                  onChange={handleChange}
                  placeholder="Pozuntu adı"
                />
              </Form.Group>

              <Form.Group className="col-md-12 mb-3">
                <Form.Label>Kod adı</Form.Label>
                <Form.Control
                  type="text"
                  name="permissionName"
                  value={formData.permissionName}
                  onChange={handleChange}
                  placeholder="Kod adı"
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
};

export default CreateCarModal;
