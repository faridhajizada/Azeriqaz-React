import { useState } from "react";
import { Modal, Form, Button, InputGroup } from "react-bootstrap";
import { KTIcon } from "../../../../../_metronic/helpers";

function CreateModal() {
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    fatherName: "",
    number: "",
    region: "",
    password: "",
    profession: "",
    district: "",
    role: "",
    asan: "",
  });

  const openModalCreate = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    closeModal();
  };

  return (
    <>
      <button className="btn btn-primary" onClick={openModalCreate}>
        <KTIcon iconName="plus" className="fs-2" /> Yeni istifadəçi yarat
      </button>

      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header className="bg-primary" closeButton>
          <Modal.Title className="text-white">
            Yeni istifadəçi yarat
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <div className="row">
              <Form.Group className="col-md-6 mb-3">
                <Form.Label>Ad*</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Ad"
                />
              </Form.Group>

              <Form.Group className="col-md-6 mb-3">
                <Form.Label>Soyad*</Form.Label>
                <Form.Control
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  required
                  placeholder="Soyad"
                />
              </Form.Group>

              <Form.Group className="col-md-6 mb-3">
                <Form.Label>Ata adi*</Form.Label>
                <Form.Control
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  required
                  placeholder="Ata adı"
                />
              </Form.Group>

              <Form.Group className="col-md-6 mb-3">
                <Form.Label>Nömrə*</Form.Label>
                <Form.Control
                  type="text"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                  placeholder="Nömrə"
                />
              </Form.Group>

              <Form.Group className="col-md-6 mb-3">
                <Form.Label>Peşə</Form.Label>
                <Form.Control
                  type="text"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  placeholder="Peşə"
                />
              </Form.Group>

              <Form.Group className="col-md-6 mb-3">
                <Form.Label>Tabel nömrəsi</Form.Label>
                <Form.Control
                  type="text"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                  placeholder="Tabel nömrəsi"
                />
              </Form.Group>

              <Form.Group className="col-md-6 mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                />
              </Form.Group>

              <Form.Group className="col-md-6 mb-3">
                <Form.Label>Şifrə</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={showPassword ? "text" : "password"} 
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="Şifrə"
                  />
                  <Button
                    variant="outline-secondary"
                    onClick={() => setShowPassword((prev) => !prev)}
                    tabIndex={-1}
                  >
                    <KTIcon
                      iconName={showPassword ? "eye-slash" : "eye"} 
                      className="fs-4"
                    />
                  </Button>
                </InputGroup>
              </Form.Group>

              <Form.Group className="col-md-6 mb-3">
                <Form.Label>Region</Form.Label>
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

              <Form.Group className="col-md-6 mb-3">
                <Form.Label>Rayon</Form.Label>
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

              {/* Роль */}
              <Form.Group className="col-md-6 mb-3">
                <Form.Label>Role*</Form.Label>
                <Form.Select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                >
                  <option value="">---</option>
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="col-md-6 mb-3">
                <Form.Label>ASAn</Form.Label>
                <Form.Select
                  name="asan"
                  value={formData.asan}
                  onChange={handleChange}
                  required
                >
                  <option value="">---</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Form.Select>
              </Form.Group>

              <div className="d-flex justify-content-end">
                <Button
                  variant="secondary"
                  onClick={closeModal}
                  className="me-2"
                >
                  Bağla
                </Button>
                <Button variant="primary" type="submit">
                  Yarat
                </Button>
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CreateModal;
