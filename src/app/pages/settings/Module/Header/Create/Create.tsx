import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import "./Create.css";

const CreateModal: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    module: "",
    moduleName: "",
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
        <i className="ki-duotone ki-plus fs-2"></i> Yeni Modul yarat
      </Button>

      <Modal show={showModal} onHide={closeModal} centered size="md">
        <Modal.Header closeButton className="bg-primary ">
          <Modal.Title className="text-white">Yeni Modul yarat</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <div className="row">
              <Form.Group className="col-md-12 mb-3">
                <Form.Label>Modul</Form.Label>
                <Form.Control
                  type="text"
                  name="Modul"
                  value={formData.module}
                  onChange={handleChange}
                  placeholder="Modul"
                />
              </Form.Group>

              <Form.Group className="col-md-12 mb-3">
                <Form.Label>Modul sistem adi</Form.Label>
                <Form.Control
                  type="text"
                  name="permissionName"
                  value={formData.moduleName}
                  onChange={handleChange}
                  placeholder="Modul sistem adı"
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

export default CreateModal;
