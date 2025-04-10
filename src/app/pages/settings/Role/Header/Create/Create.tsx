import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

function Create() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    roleName: "",
    systemName: "",
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
        <i className="ki-duotone ki-plus fs-2"></i> Yeni Rol yarat
      </Button>

      <Modal show={showModal} onHide={closeModal} centered size="xl">
        <Modal.Header closeButton className="bg-primary ">
          <Modal.Title className="text-white">Yeni Rol yarat</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <div className="row">
              <Form.Group className="col-md-6 mb-3">
                <Form.Label>Kateqoriya adı</Form.Label>
                <Form.Control
                  type="text"
                  name="brand"
                  value={formData.roleName}
                  onChange={handleChange}
                  placeholder="Rol adı"
                />
              </Form.Group>

              <Form.Group className="col-md-6 mb-3">
                <Form.Label>Rol sistem adi</Form.Label>
                <Form.Control
                  type="text"
                  name="serialNumber"
                  value={formData.systemName}
                  onChange={handleChange}
                  placeholder="Rol sistem adı"
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
