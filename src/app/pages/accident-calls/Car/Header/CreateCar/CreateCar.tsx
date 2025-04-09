import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import "./CreateCar.css";

const CreateCarModal: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    brand: "",
    serialNumber: "",
    designation: "",
    region: "",
    district: "",
    worker: "",
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
        <i className="ki-duotone ki-plus fs-2"></i> Yeni avtomobil yarat
      </Button>

      <Modal show={showModal} onHide={closeModal} centered size="md">
        <Modal.Header closeButton className="bg-primary ">
          <Modal.Title className="text-white">Yeni Avtomobil yarat</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <div className="row">
              <Form.Group className="col-md-6 mb-3">
                <Form.Label>Marka adı *</Form.Label>
                <Form.Control
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  placeholder="Marka adı"
                  required
                />
              </Form.Group>

              <Form.Group className="col-md-6 mb-3">
                <Form.Label>Seria nömrəsi *</Form.Label>
                <Form.Control
                  type="text"
                  name="serialNumber"
                  value={formData.serialNumber}
                  onChange={handleChange}
                  placeholder="Seria nömrəsi"
                  required
                />
              </Form.Group>
            </div>

            <div className="row">
              <Form.Group className="col-md-6 mb-3">
                <Form.Label>Təyinat *</Form.Label>
                <Form.Control
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  placeholder="Təyinat"
                  required
                />
              </Form.Group>

              <Form.Group className="col-md-6 mb-3">
                <Form.Label>Region *</Form.Label>
                <Form.Select
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  required
                >
                  <option value="">---</option>
                  <option value="Bakı">Bakı</option>
                  <option value="Sumqayıt">Sumqayıt</option>
                </Form.Select>
              </Form.Group>
            </div>

            <div className="row">
              <Form.Group className="col-md-6 mb-3">
                <Form.Label>Rayon *</Form.Label>
                <Form.Select
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  required
                >
                  <option value="">---</option>
                  <option value="Nərimanov">Nərimanov</option>
                  <option value="Xətai">Xətai</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="col-md-6 mb-3">
                <Form.Label>İşçi</Form.Label>
                <Form.Select
                  name="worker"
                  value={formData.worker}
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
