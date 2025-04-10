import React, { useState } from "react";
import { Modal, Form, Button, Accordion, Table } from "react-bootstrap";

const permissionActions = [
  "Yarat",
  "Redakt et",
  "Bax",
  "Hamisina bax",
  "Sil",
  "Bərpa et",
];

const permissions = [
  {
    module: "Tənzimləmələr",
    items: {
      Rollar: ["Yarat", "Redakt et", "Bax", "Hamisina bax", "Sil", "Bərpa et"],
      Səlahiyyətlər: [
        "Yarat",
        "Redakt et",
        "Bax",
        "Hamisina bax",
        "Sil",
        "Bərpa et",
      ],
      İstifadəçilər: [
        "Yarat",
        "Redakt et",
        "Bax",
        "Hamisina bax",
        null,
        "Bərpa et",
      ],
      Rayonlar: [
        "Yarat",
        "Redakt et",
        "Bax",
        "Hamisina bax",
        "Sil",
        "Bərpa et",
      ],
      Modullar: ["Yarat", null, "Bax", "Hamisina bax", "Sil", "Bərpa et"],
    },
  },
  {
    module: "Qəza çağırışı",
    items: {
      Avtomobillər: [
        "Yarat",
        "Redakt et",
        null,
        "Hamisina bax",
        null,
        "Bərpa et",
      ],
      Kategoriyalar: ["Yarat", "Redakt et", "Bax", null, "Sil", null],
      Statistikalar: ["Yarat", null, "Bax", "Hamisina bax", null, null],
    },
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
    const moduleObj = permissions.find((p) => p.module === module);
    if (!moduleObj) return;

    const actionIndex = permissionActions.indexOf(action);
    if (actionIndex === -1) return;

    const actionAllowed = moduleObj.items[item][actionIndex] !== null;
    if (!actionAllowed) return;

    setSelectedPermissions((prev: any) => {
      const updated = { ...prev };
      if (!updated[module]) updated[module] = {};
      if (!updated[module][item]) updated[module][item] = {};
      updated[module][item][action] = !updated[module][item]?.[action];
      return updated;
    });
  };

  const toggleRow = (module: string, item: string) => {
    const moduleObj = permissions.find((p) => p.module === module);
    if (!moduleObj) return;

    const currentState = Object.entries(moduleObj.items[item]).some(
      ([action, allowed], index) =>
        allowed !== null &&
        selectedPermissions?.[module]?.[item]?.[permissionActions[index]]
    );

    setSelectedPermissions((prev: any) => {
      const updated = { ...prev };
      if (!updated[module]) updated[module] = {};
      if (!updated[module][item]) updated[module][item] = {};

      permissionActions.forEach((action, index) => {
        if (moduleObj.items[item][index] !== null) {
          updated[module][item][action] = !currentState;
        }
      });

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

      Object.entries(currentModule.items).forEach(([item, actions]) => {
        const actionIndex = permissionActions.indexOf(action);
        if (actionIndex === -1 || actions[actionIndex] === null) return;

        if (!updated[module][item]) updated[module][item] = {};
        updated[module][item][action] = isChecked;
      });

      return updated;
    });
  };

  const isActionColumnChecked = (module: string, action: string) => {
    const currentModule = permissions.find((p) => p.module === module);
    if (!currentModule) return false;

    const actionIndex = permissionActions.indexOf(action);
    if (actionIndex === -1) return false;

    return Object.entries(currentModule.items).every(([item, actions]) => {
      if (actions[actionIndex] === null) return true;
      return selectedPermissions?.[module]?.[item]?.[action];
    });
  };

  const toggleModuleAllPermissions = (module: string) => {
    const currentModule = permissions.find((p) => p.module === module);
    if (!currentModule) return;

    const allChecked = Object.entries(currentModule.items).every(
      ([item, actions]) =>
        permissionActions.every((action, index) => {
          if (actions[index] === null) return true;
          return selectedPermissions?.[module]?.[item]?.[action];
        })
    );

    const updated = { ...selectedPermissions };

    Object.entries(currentModule.items).forEach(([item, actions]) => {
      if (!updated[module]) updated[module] = {};
      if (!updated[module][item]) updated[module][item] = {};
      permissionActions.forEach((action, index) => {
        if (actions[index] !== null) {
          updated[module][item][action] = !allChecked;
        }
      });
    });

    setSelectedPermissions(updated);
  };

  const isModuleAllChecked = (module: string) => {
    const currentModule = permissions.find((p) => p.module === module);
    if (!currentModule) return false;

    return Object.entries(currentModule.items).every(([item, actions]) =>
      permissionActions.every((action, index) => {
        if (actions[index] === null) return true;
        return selectedPermissions?.[module]?.[item]?.[action];
      })
    );
  };

  const isRowChecked = (module: string, item: string) => {
    const moduleObj = permissions.find((p) => p.module === module);
    if (!moduleObj) return false;

    const enabledActions = permissionActions.filter(
      (action, index) => moduleObj.items[item][index] !== null
    );

    if (enabledActions.length === 0) return false;

    return enabledActions.every(
      (action) => selectedPermissions?.[module]?.[item]?.[action]
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
        <Modal.Header closeButton className="bg-primary">
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
                          <th>
                            <div
                              className="d-flex align-items-center justify-content-between  gap-2"
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                toggleModuleAllPermissions(perm.module)
                              }
                            >
                              <span>Modul</span>
                              <Form.Check
                                type="checkbox"
                                checked={isModuleAllChecked(perm.module)}
                                onChange={() => {}}
                                onClick={(e) => e.stopPropagation()}
                              />
                            </div>
                          </th>
                          {permissionActions.map((action) => {
                            const isChecked = isActionColumnChecked(
                              perm.module,
                              action
                            );

                            const hasEnabledCheckboxes = Object.values(
                              perm.items
                            ).some((itemActions) => {
                              const actionIndex =
                                permissionActions.indexOf(action);
                              return (
                                actionIndex !== -1 &&
                                itemActions[actionIndex] !== null
                              );
                            });

                            return (
                              <th key={action}>
                                <div
                                  className="d-flex align-items-center justify-content-between ps-8 gap-2"
                                  style={{
                                    cursor: hasEnabledCheckboxes
                                      ? "pointer"
                                      : "default",
                                  }}
                                  onClick={() => {
                                    if (hasEnabledCheckboxes) {
                                      toggleActionColumn(
                                        perm.module,
                                        action,
                                        !isChecked
                                      );
                                    }
                                  }}
                                >
                                  <span>{action}</span>
                                  <Form.Check
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={(e) =>
                                      toggleActionColumn(
                                        perm.module,
                                        action,
                                        e.target.checked
                                      )
                                    }
                                    onClick={(e) => e.stopPropagation()}
                                    disabled={!hasEnabledCheckboxes}
                                    className={
                                      !hasEnabledCheckboxes ? "text-muted" : ""
                                    }
                                  />
                                </div>
                              </th>
                            );
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(perm.items).map(([item, actions]) => (
                          <tr
                            key={item}
                            style={{ cursor: "pointer" }}
                            onClick={() => toggleRow(perm.module, item)}
                          >
                            <td>
                              <div className="d-flex align-items-center justify-content-between gap-2">
                                <span>{item}</span>
                                <Form.Check
                                  type="checkbox"
                                  checked={isRowChecked(perm.module, item)}
                                  onChange={() => {}}
                                  onClick={(e) => e.stopPropagation()}
                                />
                              </div>
                            </td>
                            {permissionActions.map((action) => {
                              const actionIndex =
                                permissionActions.indexOf(action);
                              const isAllowed =
                                actionIndex !== -1 &&
                                actions[actionIndex] !== null;
                              return (
                                <td key={action} className="text-center">
                                  <Form.Check
                                    type="checkbox"
                                    checked={
                                      (isAllowed &&
                                        selectedPermissions?.[perm.module]?.[
                                          item
                                        ]?.[action]) ||
                                      false
                                    }
                                    onChange={() =>
                                      handleCheckboxChange(
                                        perm.module,
                                        item,
                                        action
                                      )
                                    }
                                    disabled={!isAllowed}
                                    className={!isAllowed ? "text-muted" : ""}
                                    onClick={(e) => e.stopPropagation()}
                                  />

                                  
                                </td>
                              );
                            })}
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
