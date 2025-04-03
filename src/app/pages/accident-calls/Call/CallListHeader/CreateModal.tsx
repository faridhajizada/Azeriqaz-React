import React, { useState } from "react";
import { Modal, Form, Button, Tab, Nav } from "react-bootstrap";

function CreateModal() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    accidentNumber: "AQ-2025-34",
    category: "",
    subCategory: "",
    region: "",
    district: "",
    crmCode: "",
    description: "",
    isPassive: false,
    firstName: "",
    lastName: "",
    fatherName: "",
  });

  const openModalCreate = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    closeModal();
  };

  return (
    <>
      <Button variant="primary" onClick={openModalCreate}>
        Qəza çağırışı yarat
      </Button>

      <Modal show={showModal} onHide={closeModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Qəza çağırışı yarat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <div className="row">
              <Form.Group className="col-md-4 mb-3">
                <Form.Label>Qəza çağırış nömrəsi</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.accidentNumber}
                  disabled
                />
              </Form.Group>

              <Form.Group className="col-md-4 mb-3">
                <Form.Label>Kategoriya</Form.Label>
                <Form.Select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="">---</option>
                  <option value="elektrik">Elektrik</option>
                  <option value="su">Su</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="col-md-4 mb-3">
                <Form.Label>Alt kateqoriya</Form.Label>
                <Form.Select
                  name="subCategory"
                  value={formData.subCategory}
                  onChange={handleChange}
                >
                  <option value="">---</option>
                  <option value="transformator">Transformator</option>
                  <option value="boru">Boru</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="col-md-6 mb-3">
                <Form.Label>Region</Form.Label>
                <Form.Select
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                >
                  <option value="">---</option>
                  <option value="baki">Bakı</option>
                  <option value="gəncə">Gəncə</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="col-md-6 mb-3">
                <Form.Label>Rayon</Form.Label>
                <Form.Select
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                >
                  <option value="">---</option>
                  <option value="nerimanov">Nərimanov</option>
                  <option value="sumqayit">Sumqayıt</option>
                </Form.Select>
              </Form.Group>
            </div>

            <div className="row">
              <Form.Group className="col-md-6 mb-3">
                <Form.Label>CRM kod</Form.Label>
                <Form.Control
                  type="text"
                  name="crmCode"
                  value={formData.crmCode}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className=" col-md-6 mb-3 mt-3">
                <Form.Label>Passiv et</Form.Label>
                <Form.Check
                  type="checkbox"
                  label="Passiv et"
                  name="isPassive"
                  checked={formData.isPassive}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>

            <Form.Group className="mb-3">
              <Form.Label>Qəza haqqında qısa şərh</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                height={100}
                value={formData.description}
                onChange={handleChange}
              />
            </Form.Group>

            <Tab.Container defaultActiveKey="abonent">
              <Nav variant="tabs">
                <Nav.Item>
                  <Nav.Link eventKey="abonent">Abonent</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="non-abonent">Qeyri abonent</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="abonent">
                  <Button variant="primary" className="w-100">
                    Abunə seç
                  </Button>
                </Tab.Pane>
                <Tab.Pane eventKey="non-abonent">
                  <div className="row">
                    <Form.Group className="col-md-4 mb-3">
                      <Form.Label>Ad</Form.Label>
                      <Form.Control
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="col-md-4 mb-3">
                      <Form.Label>Soyad</Form.Label>
                      <Form.Control
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="col-md-4 mb-3">
                      <Form.Label>Ata adı</Form.Label>
                      <Form.Control
                        type="text"
                        name="fatherName"
                        value={formData.fatherName}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>

            <div className="d-flex justify-content-end mt-4">
              <Button variant="secondary" onClick={closeModal} className="me-2">
                Bağla
              </Button>
              <Button variant="primary" type="submit">
                Yadda saxla
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CreateModal;
