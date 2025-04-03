import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import "./CreateModal.scss";

const CustomStepper = ({ activeStep, steps, onStepClick }) => {
  console.log("activeStep", activeStep);
  console.log("steps", steps);
  console.log("onStepClick", onStepClick);
  return (
    <div className="stepper mb-4">
      <div className="stepper-header d-flex justify-content-between">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`stepper-step ${activeStep === index ? "active" : ""} ${
              activeStep > index ? "completed" : ""
            }`}
            onClick={() => onStepClick(index)}
            style={{ cursor: "pointer" }}
          >
            <div className="stepper-circle">{index + 1}</div>
            <div className="stepper-title">{step.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

function CreateModal() {
  const handleStepClick = (stepIndex) => {
    setActiveStep(stepIndex);
  };
  const [showModal, setShowModal] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [userType, setUserType] = useState("abonent");
  const [formData, setFormData] = useState({
    accidentNumber: "AQ-2025-34",
    category: "",
    subCategory: "",
    region: "",
    district: "",
    crmCode: "",
    description: "",
    isPassive: false,
    // Поля для Abonent
    subscriberCode: "",
    meterNumber: "",
    // Поля для Qeyri abonent
    firstName: "",
    lastName: "",
    fatherName: "",
    fin: "",
    passportNumber: "",
    address: "",
    landmark: "",
    phone: "",
    secondPhone: "",
  });

  const openModalCreate = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    setActiveStep(0);
    setUserType("abonent");
  };

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
    // closeModal();
  };

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleUserTypeSelect = (type: string) => {
    setUserType(type);
  };

  const steps = [
    {
      title: "Abonent növü",
      content: (
        <div className="text-center py-4">
          <div className="row">
            <h5>Abonent növünü seçin</h5>
            <div className="d-flex justify-content-center gap-3 my-10">
              <Button
                variant={userType === "abonent" ? "primary" : "outline-primary"}
                onClick={() => handleUserTypeSelect("abonent")}
                className="px-5"
                style={{ width: "100%" }}
              >
                Abonent
              </Button>
              <Button
                variant={
                  userType === "non-abonent" ? "primary" : "outline-primary"
                }
                onClick={() => handleUserTypeSelect("non-abonent")}
                className="px-5"
                style={{ width: "100%" }}
              >
                Qeyri abonent
              </Button>
              <></>
            </div>
          </div>
          <div className="row ">
            {userType === "abonent" ? (
              <>
                <div className="row ">
                  <Form.Group className="col-md-12 mb-3">
                    <Form.Label>Abonent kodu*</Form.Label>
                    <div className="d-flex">
                      <Form.Control
                        type="text"
                        name="subscriberCode"
                        value={formData.subscriberCode}
                        onChange={handleChange}
                        className="me-2" // добавляем отступ между полем и кнопкой
                      />
                      <Button variant="primary">Axtar</Button>
                    </div>
                  </Form.Group>
                </div>

                <div className="row">
                  <Form.Group className="col-md-6 mb-3">
                    <Form.Label>Ad Soyad</Form.Label>
                    <Form.Control
                      type="text"
                      value={`${formData.firstName} ${formData.lastName}`}
                      disabled
                    />
                  </Form.Group>
                  <Form.Group className="col-md-6 mb-3">
                    <Form.Label>Ata adı</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.fatherName}
                      disabled
                    />
                  </Form.Group>
                  <Form.Group className="col-md-6 mb-3">
                    <Form.Label>Ad Soyad</Form.Label>
                    <Form.Control
                      type="text"
                      value={`${formData.firstName} ${formData.lastName}`}
                      disabled
                    />
                  </Form.Group>
                  <Form.Group className="col-md-6 mb-3">
                    <Form.Label>Ata adı</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.fatherName}
                      disabled
                    />
                  </Form.Group>
                  <Form.Group className="col-md-6 mb-3">
                    <Form.Label>Ad Soyad</Form.Label>
                    <Form.Control
                      type="text"
                      value={`${formData.firstName} ${formData.lastName}`}
                      disabled
                    />
                  </Form.Group>
                  <Form.Group className="col-md-6 mb-3">
                    <Form.Label>Ata adı</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.fatherName}
                      disabled
                    />
                  </Form.Group>
                </div>
              </>
            ) : (
              <div className="row">
                <Form.Group className="col-md-6 mb-3">
                  <Form.Label>Ad *</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="col-md-6 mb-3">
                  <Form.Label>Soyad *</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="col-md-6 mb-3">
                  <Form.Label>FIN</Form.Label>
                  <Form.Control
                    type="text"
                    name="fin"
                    value={formData.fin}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="col-md-6 mb-3">
                  <Form.Label>Abunə kodu</Form.Label>
                  <Form.Control
                    type="text"
                    name="subscriberCode"
                    value={formData.subscriberCode}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="col-md-6 mb-3">
                  <Form.Label>Ata adı</Form.Label>
                  <Form.Control
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="col-md- mb-3">
                  <Form.Label>Sayğac nömrəsi</Form.Label>
                  <Form.Control
                    type="text"
                    name="meterNumber"
                    value={formData.meterNumber}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="col-md-6 mb-3">
                  <Form.Label>Pasport nömrəsi</Form.Label>
                  <Form.Control
                    type="text"
                    name="passportNumber"
                    value={formData.passportNumber}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="col-md-6 mb-3">
                  <Form.Label>Ünvan *</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="col-md-6 mb-3">
                  <Form.Label>Orientir</Form.Label>
                  <Form.Control
                    type="text"
                    name="landmark"
                    value={formData.landmark}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="col-md-6 mb-3">
                  <Form.Label>Telefon *</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="col-md-6 mb-3">
                  <Form.Label>2-ci Telefon</Form.Label>
                  <Form.Control
                    type="text"
                    name="secondPhone"
                    value={formData.secondPhone}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="col-md-6 mb-3">
                  <Form.Label>Ünvan seç</Form.Label>
                  <Button variant="outline-secondary" className="w-100">
                    Ünvan seçim et
                  </Button>
                </Form.Group>
              </div>
            )}
          </div>
        </div>
      ),
    },
    {
      title: "Əsas məlumatlar",
      content: (
        <>
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

            <Form.Group className="col-md-6 mb-3 mt-3">
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
              rows={3}
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Group>
        </>
      ),
    },
    {
      title: "Abonentin məlumatları",
      content: (
        <>
          <div className="row">
            <Form.Group className="col-md-6 mb-3">
              <Form.Label>Orientir</Form.Label>
              <Form.Control type="text" value="" />
            </Form.Group>
            <Form.Group className="col-md-6 mb-3">
              <Form.Label>Abonentin nömrəsi*</Form.Label>
              <Form.Control type="text" value=""></Form.Control>
            </Form.Group>
            <Form.Group className="col-md-6 mb-3">
              <Form.Label>Zəng edənin tam adı</Form.Label>
              <Form.Control type="text" value=""></Form.Control>
            </Form.Group>
            <Form.Group className="col-md-6 mb-3">
              <Form.Label>Zəng edənin nömrəsi</Form.Label>
              <Form.Control type="text" value="" />
            </Form.Group>
          </div>
        </>
      ),
    },
  ];

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
            <CustomStepper
              activeStep={activeStep}
              steps={steps}
              onStepClick={handleStepClick}
            />

            {steps[activeStep].content}

            <div className="d-flex justify-content-between mt-4">
              <div>
                {activeStep > 0 && (
                  <Button variant="secondary" onClick={handlePrev}>
                    Əvvəlki
                  </Button>
                )}
              </div>
              <div>
                {activeStep < 0 ? (
                  <div></div>
                ) : activeStep < steps.length - 1 ? (
                  <Button variant="primary" onClick={handleNext}>
                    Növbəti
                  </Button>
                ) : (
                  <Button variant="success" type="submit" onClick={closeModal}>
                    Yadda saxla
                  </Button>
                )}
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CreateModal;
