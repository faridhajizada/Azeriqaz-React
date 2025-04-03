import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import "./CreateModal.scss";

const CustomStepper = ({ activeStep, steps, onStepClick }) => (
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

const RequiredField = ({ children }) => (
  <Form.Label>
    {children} <span className="text-danger">*</span>
  </Form.Label>
);

const FormInput = ({
  label,
  name,
  value,
  onChange,
  required = false,
  disabled = false,
  type = "text",
  col,
}) => (
  <Form.Group className={`col-md-${col} mb-3`}>
    {required ? (
      <RequiredField>{label}</RequiredField>
    ) : (
      <Form.Label>{label}</Form.Label>
    )}
    <Form.Control
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required={required}
    />
  </Form.Group>
);

const FormSelect = ({ label, name, value, onChange, options, col }) => (
  <Form.Group className={`col-md-${col} mb-3`}>
    <Form.Label>{label}</Form.Label>
    <Form.Select name={name} value={value} onChange={onChange}>
      <option value="">---</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </Form.Select>
  </Form.Group>
);

function CreateModal() {
  // Основные состояния
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
    abonentCode: "",
    passport: "",
    firstName: "",
    lastName: "",
    fatherName: "",
    fin: "",
    // Поля для Qeyri abonent
    passportNumber: "",
    address: "",
    landmark: "",
    phone: "",
    secondPhone: "",
  });

  // Состояния для модального окна адреса
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [addressForm, setAddressForm] = useState({
    region: "",
    district: "",
    street: "",
    house: "",
    apartment: "",
  });

  // Данные для выпадающих списков
  const categories = [
    { value: "elektrik", label: "Elektrik" },
    { value: "su", label: "Su" },
  ];

  const subCategories = [
    { value: "transformator", label: "Transformator" },
    { value: "boru", label: "Boru" },
  ];

  const regions = [
    { value: "Bakı", label: "Bakı" },
    { value: "Gəncə", label: "Gəncə" },
  ];

  const districts = [
    { value: "Nərimanov", label: "Nərimanov" },
    { value: "Səbail", label: "Səbail" },
  ];

  const streets = [
    { value: "Nizami küçəsi", label: "Nizami küçəsi" },
    { value: "Füzuli küçəsi", label: "Füzuli küçəsi" },
  ];

  // Обработчики событий
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

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddressForm({
      ...addressForm,
      [name]: value,
    });
  };

  const handleAddressSelect = () => {
    const fullAddress = `${addressForm.region}, ${addressForm.district}, ${
      addressForm.street
    }, ${addressForm.house}${
      addressForm.apartment ? `, m. ${addressForm.apartment}` : ""
    }`;

    setFormData({
      ...formData,
      address: fullAddress,
    });

    setShowAddressModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    closeModal();
  };

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handlePrev = () => setActiveStep((prev) => prev - 1);
  const handleStepClick = (stepIndex) => setActiveStep(stepIndex);
  const handleUserTypeSelect = (type) => setUserType(type);

  // Компоненты шагов
  const AbonentForm = () => (
    <>
      <div className="row">
        <Form.Group className="col-md-12 mb-3">
          <RequiredField>Abonent kodu*</RequiredField>
          <div className="d-flex">
            <Form.Control
              type="text"
              name="subscriberCode"
              value={formData.subscriberCode}
              onChange={handleChange}
              className="me-2"
              required
            />
            <Button
              variant="primary"
              style={{ width: "-webkit-fill-available" }}
            >
              Axtar
            </Button>
          </div>
        </Form.Group>
      </div>

      <div className="row">
        <FormInput label="Ad" value={formData.firstName} disabled col="4" />
        <FormInput label="Soyad" value={formData.lastName} disabled col="4" />
        <FormInput
          label="Ata adı"
          value={formData.fatherName}
          disabled
          col="4"
        />
        <FormInput label="FIN" value={formData.fin} disabled col="4" />
        <FormInput
          label="Abonent kodu"
          value={formData.abonentCode}
          disabled
          col="4"
        />
        <FormInput
          label="Sayğac nömrəsi"
          value={formData.meterNumber}
          disabled
          col="4"
        />
        <FormInput
          label="Pasport nömrəsi"
          value={formData.passport}
          disabled
          col="6"
        />
        <FormInput label="Ünvan" value={formData.address} disabled col="6" />
      </div>
    </>
  );

  const NonAbonentForm = () => (
    <div className="row">
      <FormInput
        label="Ad"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
        col="4"
      />
      <FormInput
        label="Soyad"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
        col="4"
      />
      <FormInput
        label="Ata adı"
        name="fatherName"
        value={formData.fatherName}
        onChange={handleChange}
        col="4"
      />
      <FormInput
        label="FIN"
        name="fin"
        value={formData.fin}
        onChange={handleChange}
        col="4"
      />
      <FormInput
        label="Pasport nömrəsi"
        name="passportNumber"
        value={formData.passportNumber}
        onChange={handleChange}
        col="4"
      />
      <FormInput
        label="Sayğac nömrəsi"
        name="meterNumber"
        value={formData.meterNumber}
        onChange={handleChange}
        col="4"
      />
      <FormInput
        label="Orientir"
        name="landmark"
        value={formData.landmark}
        onChange={handleChange}
        col="4"
      />
      <FormInput
        label="Telefon"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
        col="4"
      />
      <FormInput
        label="2-ci Telefon"
        name="secondPhone"
        value={formData.secondPhone}
        onChange={handleChange}
        col="4"
      />
      <FormInput
        label="Abunə kodu"
        name="subscriberCode"
        value={formData.subscriberCode}
        onChange={handleChange}
        col="4"
      />
      <FormInput
        label="Ünvan"
        name="address"
        value={formData.address}
        onChange={handleChange}
        required
        col="4"
      />
      <div className="col-md-4 mb-3 mt-8">
        <Button
          variant="primary"
          className="w-100"
          onClick={() => setShowAddressModal(true)}
        >
          Ünvan axtar
        </Button>
      </div>
    </div>
  );

  const UserTypeStep = () => (
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
            variant={userType === "non-abonent" ? "primary" : "outline-primary"}
            onClick={() => handleUserTypeSelect("non-abonent")}
            className="px-5"
            style={{ width: "100%" }}
          >
            Qeyri abonent
          </Button>
        </div>
      </div>
      <div className="row">
        {userType === "abonent" ? <AbonentForm /> : <NonAbonentForm />}
      </div>
    </div>
  );

  const MainInfoStep = () => (
    <>
      <div className="row">
        <FormInput
          label="Qəza çağırış nömrəsi"
          value={formData.accidentNumber}
          disabled
          col="4"
        />
        <FormSelect
          label="Kategoriya"
          name="category"
          value={formData.category}
          onChange={handleChange}
          options={categories}
          col="4"
        />
        <FormSelect
          label="Alt kateqoriya"
          name="subCategory"
          value={formData.subCategory}
          onChange={handleChange}
          options={subCategories}
          col="4"
        />
        <FormSelect
          label="Region"
          name="region"
          value={formData.region}
          onChange={handleChange}
          options={regions}
          col="4"
        />
        <FormSelect
          label="Rayon"
          name="district"
          value={formData.district}
          onChange={handleChange}
          options={districts}
          col="4"
        />
      </div>

      <div className="row">
        <FormInput
          label="CRM kod"
          name="crmCode"
          value={formData.crmCode}
          onChange={handleChange}
          col="4"
        />
        <Form.Group className="col-md-6 mb-3 mt-3">
          <Form.Label>Passiv et</Form.Label>
          <Form.Check
            type="checkbox"
            label="Passiv et"
            name="isPassive"
            checked={formData.isPassive}
            onChange={handleChange}
            col="4"
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
  );

  const UserInfoStep = () => (
    <div className="row">
      <FormInput label="Orientir" value="" col="6" />
      <FormInput label="Abonentin nömrəsi*" value="" col="6" />
      <FormInput label="Zəng edənin tam adı" value="" col="6" />
      <FormInput label="Zəng edənin nömrəsi" value="" col="6" />
    </div>
  );

  const FormNavigation = () => (
    <div className="d-flex justify-content-between mt-4">
      <div>
        {activeStep > 0 && (
          <Button variant="secondary" onClick={handlePrev}>
            Əvvəlki
          </Button>
        )}
      </div>
      <div>
        {activeStep < steps.length - 1 ? (
          <Button variant="primary" onClick={handleNext}>
            Növbəti
          </Button>
        ) : (
          <Button variant="success" type="submit">
            Yadda saxla
          </Button>
        )}
      </div>
    </div>
  );

  const steps = [
    {
      title: "Abonent növü",
      content: <UserTypeStep />,
    },
    {
      title: "Əsas məlumatlar",
      content: <MainInfoStep />,
    },
    {
      title: "Abonentin məlumatları",
      content: <UserInfoStep />,
    },
  ];

  return (
    <>
      <Button variant="primary" onClick={openModalCreate}>
        Qəza çağırışı yarat
      </Button>

      <Modal show={showModal} onHide={closeModal} centered size="lg">
        <Modal.Header closeButton className="bg-primary">
          <Modal.Title className="text-white">Qəza çağırışı yarat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <CustomStepper
              activeStep={activeStep}
              steps={steps}
              onStepClick={handleStepClick}
            />

            {steps[activeStep].content}

            <FormNavigation />
          </Form>
        </Modal.Body>
      </Modal>

      <Modal
        show={showAddressModal}
        onHide={() => setShowAddressModal(false)}
        centered
      >
        <Modal.Header closeButton className="bg-primary ">
          <Modal.Title className="text-white">Ünvan seç</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="row">
              <FormSelect
                label="Region"
                name="region"
                value={addressForm.region}
                onChange={handleAddressChange}
                options={regions}
                col="6"
              />

              <FormSelect
                label="Rayon"
                name="district"
                value={addressForm.district}
                onChange={handleAddressChange}
                options={districts}
                col="6"
              />

              <FormSelect
                label="Küçə"
                name="street"
                value={addressForm.street}
                onChange={handleAddressChange}
                options={streets}
                col="6"
              />

              <FormInput
                label="Ev"
                name="house"
                value={addressForm.house}
                onChange={handleAddressChange}
                col="6"
              />

              <FormInput
                label="Menzil"
                name="apartment"
                value={addressForm.apartment}
                onChange={handleAddressChange}
                col="12"
              />
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowAddressModal(false)}
          >
            Ləğv et
          </Button>
          <Button variant="primary" onClick={handleAddressSelect}>
            Seç
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateModal;
