import React, { useState } from "react";
import { Modal, Form, Button, Accordion, Table } from "react-bootstrap";

const permissionActions = ["Yarat", "Redaktə", "Bax", "Sil", "Bərpa et"];

const permissions = [
  {
    module: "Tənzimləmələr",
    items: ["Rollar", "Səlahiyyətlər", "İstifadəçilər", "Rayonlar", "Modullar"],
  },
  {
    module: "Qəza çağırışı",
    items: ["Çağırış siyahısı", "Çağırış əlavə et"],
  },
];

function Create() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    roleName: "",
    systemName: "",
  });

  const [selectedPermissions, setSelectedPermissions] = useState<any>({});

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (
    module: string,
    item: string,
    action: string
  ) => {
    setSelectedPermissions((prev: any) => {
      const updated = { ...prev };
      if (!updated[module]) updated[module] = {};
      if (!updated[module][item]) updated[module][item] = {};
      updated[module][item][action] = !updated[module][item]?.[action];
      return updated;
    });
  };

  const toggleActionColumn = (
    module: string,
    action: string,
    isChecked: boolean
  ) => {
    setSelectedPermissions((prev: any) => {
      const updated = { ...prev };
      const currentModule = permissions.find((p) => p.module === module);
      if (!currentModule) return updated;

      if (!updated[module]) updated[module] = {};

      currentModule.items.forEach((item) => {
        if (!updated[module][item]) updated[module][item] = {};
        updated[module][item][action] = isChecked;
      });

      return updated;
    });
  };

  const isActionColumnChecked = (module: string, action: string) => {
    const currentModule = permissions.find((p) => p.module === module);
    if (!currentModule) return false;

    return currentModule.items.every(
      (item) => selectedPermissions?.[module]?.[item]?.[action]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data", formData);
    console.log("Selected Permissions", selectedPermissions);
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
                <Form.Label>Rol adı</Form.Label>
                <Form.Control
                  type="text"
                  name="roleName"
                  value={formData.roleName}
                  onChange={handleChange}
                  placeholder="Rol adı"
                />
              </Form.Group>

              <Form.Group className="col-md-6 mb-3">
                <Form.Label>Rol sistem adı</Form.Label>
                <Form.Control
                  type="text"
                  name="systemName"
                  value={formData.systemName}
                  onChange={handleChange}
                  placeholder="Rol sistem adı"
                />
              </Form.Group>
            </div>

            <Accordion defaultActiveKey="0">
              {permissions.map((perm, index) => (
                <Accordion.Item eventKey={index.toString()} key={perm.module}>
                  <Accordion.Header>{perm.module}</Accordion.Header>
                  <Accordion.Body>
                    <Table bordered hover>
                      <thead className="table-light">
                        <tr>
                          <th>Modul</th>
                          {permissionActions.map((action) => (
                            <th key={action}>
                              <div className="d-flex align-items-center justify-content-center gap-2">
                                <Form.Check
                                  type="checkbox"
                                  checked={isActionColumnChecked(
                                    perm.module,
                                    action
                                  )}
                                  onChange={(e) =>
                                    toggleActionColumn(
                                      perm.module,
                                      action,
                                      e.target.checked
                                    )
                                  }
                                />
                                <span>{action}</span>
                              </div>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {perm.items.map((item) => (
                          <tr key={item}>
                            <td>{item}</td>
                            {permissionActions.map((action) => (
                              <td key={action}>
                                <Form.Check
                                  type="checkbox"
                                  checked={
                                    selectedPermissions?.[perm.module]?.[
                                      item
                                    ]?.[action] || false
                                  }
                                  onChange={() =>
                                    handleCheckboxChange(
                                      perm.module,
                                      item,
                                      action
                                    )
                                  }
                                />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>

            <Modal.Footer className="mt-4">
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
