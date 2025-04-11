import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import "./Create.css";

interface FormData {
  regionOptions: string | null;
  rayonOptions: string | null;
  workerOptions: string | null;
  orderedOptions: string | null;
  ownOptions: string | null;
  personalCode: string;
  abonentName: string;
  abonentSurname: string;
  abonentFatherName: string;
  abonenrFIN: string;
  abonentCode: string;
  adress: string;
  telefonNumber: string;
  meterNumber: string;
  meter: string;
  meterType: string;
  examination_date: string | null;
  contract_date: string | null;
  note: string;
}

interface InputField {
  name: keyof FormData;
  type: string;
  placeholder: string;
  options?: string[];
}

// Моковые данные абонентов для примера
const mockAbonents = [
  {
    abonentCode: "12345",
    abonentName: "Али",
    abonentSurname: "Алиев",
    abonentFatherName: "Алиевич",
    abonenrFIN: "1234567A",
    adress: "Баку, ул. Примерная 123",
    telefonNumber: "+994501234567",
    meterNumber: "MTR001",
    meterType: "Тип 1",
    examination_date: "2023-12-01",
    contract_date: "2023-01-01",
  },
  {
    abonentCode: "67890",
    abonentName: "Вусал",
    abonentSurname: "Гусейнов",
    abonentFatherName: "Мамед оглы",
    abonenrFIN: "7654321B",
    adress: "Баку, ул. Другая 456",
    telefonNumber: "+994507654321",
    meterNumber: "MTR002",
    meterType: "Тип 2",
    examination_date: "2023-11-15",
    contract_date: "2023-02-01",
  },
];

const Create: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchCode, setSearchCode] = useState("");
  const [formData, setFormData] = useState<FormData>({
    regionOptions: null,
    rayonOptions: null,
    workerOptions: null,
    orderedOptions: null,
    ownOptions: null,
    personalCode: "",
    abonentName: "",
    abonentSurname: "",
    abonentFatherName: "",
    abonenrFIN: "",
    abonentCode: "",
    adress: "",
    telefonNumber: "",
    meterNumber: "",
    meter: "",
    meterType: "",
    examination_date: null,
    contract_date: null,
    note: "",
  });

  const regionOptions = ["Region 1", "Region 2", "Region 3"];
  const rayonOptions = ["Rayon 1", "Rayon 2", "Rayon 3"];
  const workerOptions = ["İşçi 1", "İşçi 2", "İşçi 3"];
  const orderedOptions = ["Sifariş 1", "Sifariş 2", "Sifariş 3"];
  const ownOptions = ["Özünə aid olanlar", "Başqa"];

  const inputs: InputField[] = [
    {
      name: "regionOptions",
      type: "select",
      placeholder: "Region seçin",
      options: regionOptions,
    },
    {
      name: "rayonOptions",
      type: "select",
      placeholder: "Rayon seçin",
      options: rayonOptions,
    },
    {
      name: "workerOptions",
      type: "select",
      placeholder: "İşçi seçin",
      options: workerOptions,
    },
    {
      name: "orderedOptions",
      type: "select",
      placeholder: "Sifariş növü",
      options: orderedOptions,
    },
    {
      name: "ownOptions",
      type: "select",
      placeholder: "Özünə aid olanlar",
      options: ownOptions,
    },
    { name: "personalCode", type: "text", placeholder: "İşçi personal kod" },
    { name: "abonentName", type: "text", placeholder: "Abonent adı" },
    { name: "abonentSurname", type: "text", placeholder: "Abonent soyadı" },
    { name: "abonentFatherName", type: "text", placeholder: "Abonent ata adı" },
    { name: "abonenrFIN", type: "text", placeholder: "Abonent FIN" },
    { name: "abonentCode", type: "text", placeholder: "Abonent Kodu" },
    { name: "adress", type: "text", placeholder: "Ünvan" },
    { name: "telefonNumber", type: "text", placeholder: "Telefon nömrəsi" },
    { name: "meterNumber", type: "text", placeholder: "Sayğac nömrəsi" },
    { name: "meterType", type: "text", placeholder: "Sayğac tipi" },
    { name: "examination_date", type: "date", placeholder: "Yoxlama tarixi" },
    { name: "contract_date", type: "date", placeholder: "Müqavilə tarixi" },
    { name: "note", type: "textarea", placeholder: "Qeyd" },
  ];

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value === "" ? null : value,
    }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCode(e.target.value);
  };

  const findAbonentByCode = () => {
    const foundAbonent = mockAbonents.find(
      (abonent) => abonent.abonentCode === searchCode
    );

    if (foundAbonent) {
      setFormData((prev) => ({
        ...prev,
        abonentName: foundAbonent.abonentName,
        abonentSurname: foundAbonent.abonentSurname,
        abonentFatherName: foundAbonent.abonentFatherName,
        abonenrFIN: foundAbonent.abonenrFIN,
        abonentCode: foundAbonent.abonentCode,
        adress: foundAbonent.adress,
        telefonNumber: foundAbonent.telefonNumber,
        meterNumber: foundAbonent.meterNumber,
        meterType: foundAbonent.meterType,
        examination_date: foundAbonent.examination_date,
        contract_date: foundAbonent.contract_date,
      }));
    } else {
      alert("Abonent tapılmadı!");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    closeModal();
  };

  const renderInput = (input: InputField) => {
    switch (input.type) {
      case "select":
        return (
          <Form.Select
            name={input.name}
            value={formData[input.name] || ""}
            onChange={handleChange}
          >
            <option value="">{input.placeholder}</option>
            {input.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Form.Select>
        );
      case "textarea":
        return (
          <Form.Control
            as="textarea"
            name={input.name}
            value={formData[input.name] || ""}
            onChange={handleChange}
            placeholder={input.placeholder}
            rows={3}
          />
        );
      case "date":
        return (
          <Form.Control
            type="date"
            name={input.name}
            value={formData[input.name] || ""}
            onChange={handleChange}
          />
        );
      default:
        return (
          <Form.Control
            type={input.type}
            name={input.name}
            value={formData[input.name] || ""}
            onChange={handleChange}
            placeholder={input.placeholder}
          />
        );
    }
  };

  return (
    <>
      <Button variant="primary" onClick={openModal}>
        <i className="ki-duotone ki-plus fs-2"></i> Yeni Sifariş yarat
      </Button>

      <Modal show={showModal} onHide={closeModal} centered size="lg">
        <Modal.Header closeButton className="bg-primary">
          <Modal.Title className="text-white">Yeni Sifariş yarat</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="findAbonentCode mb-4 p-3 bg-light rounded">
            <h5 className="mb-3">Abonent axtarışı</h5>
            <div className="row g-2">
              <div className="col-md-9">
                <Form.Control
                  type="text"
                  value={searchCode}
                  onChange={handleSearchChange}
                  placeholder="Abonent kodunu daxil edin"
                />
              </div>
              <div className="col-md-3">
                <Button
                  variant="primary"
                  onClick={findAbonentByCode}
                  className="w-100"
                >
                  Axtar
                </Button>
              </div>
            </div>
          </div>

          <Form onSubmit={handleSubmit}>
            <div className="row">
              {inputs.map((input, index) => (
                <Form.Group key={index} className="col-md-6 my-3">
                  <Form.Label>{input.placeholder}</Form.Label>
                  {renderInput(input)}
                </Form.Group>
              ))}
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

export default Create;
