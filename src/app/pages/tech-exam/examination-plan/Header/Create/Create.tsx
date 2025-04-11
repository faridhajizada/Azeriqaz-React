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
        <i className="ki-duotone ki-plus fs-2"></i> Yeni Sifariş yarat
      </Button>

      <Modal show={showModal} onHide={closeModal} centered size="md">
        <Modal.Header closeButton className="bg-primary ">
          <Modal.Title className="text-white">Yeni Sifariş yarat</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <div className="row">
              <Form.Group className="col-md-6 mb-3">
                <Form.Label>Səlahiyyət</Form.Label>
                <Form.Control
                  type="text"
                  name="permission"
                  value={formData.permission}
                  onChange={handleChange}
                  placeholder="Səlahiyyət"
                />
              </Form.Group>

              <Form.Group className="col-md-6 mb-3">
                <Form.Label>Səlahiyyət sistem adı</Form.Label>
                <Form.Control
                  type="text"
                  name="permissionName"
                  value={formData.permissionName}
                  onChange={handleChange}
                  placeholder="Səlahiyyət sistem adı"
                />
              </Form.Group>

              <Form.Group className="col-md-6 mb-3">
                <Form.Label>Modul</Form.Label>
                <Form.Select
                  name="distmodulerict"
                  value={formData.module}
                  onChange={handleChange}
                >
                  <option value="">---</option>
                  <option value="Nərimanov">Nərimanov</option>
                  <option value="Xətai">Xətai</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="col-md-6 mb-3">
                <Form.Label>İmkanlar</Form.Label>
                <Form.Select
                  name="ability"
                  value={formData.ability}
                  onChange={handleChange}
                >
                  <option value="">---</option>
                  <option value="Elçin Məmmədov">Elçin Məmmədov</option>
                </Form.Select>
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
