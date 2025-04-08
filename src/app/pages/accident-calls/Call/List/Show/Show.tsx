import { Modal, Button, Tab, Nav, Form } from "react-bootstrap";

interface ShowProps {
  show: Boolean;
  handleClose: () => void;
}

function Show({ show, handleClose }: ShowProps) {
  return (
    <>
      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton className="bg-primary text-white">
          <Modal.Title>Qəza çağırışı</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-4">
              <div className="row">
                <div className="col-6">
                  <p>Kateqoriya</p>
                  <h4>Partlayış</h4>
                  <p>Çağırış nömrəsi</p>
                  <h4>AQ-2024-1</h4>
                  <p>Ad Soyad</p>
                  <h4>Elvin Malikov</h4>
                  <p>Telefon nömrəsi</p>
                  <h4>0506567001</h4>
                  <p>Qəza haqqında qısa şərh</p>
                  <h4>test</h4>
                  <p>Dispetçer</p>
                  <h4>admin admin</h4>
                </div>
                <div className="col-6">
                  <p>Fin</p>
                  <h4>5zk92ne</h4>
                  <p>Abunəçi kodu</p>
                  <h4>456456</h4>
                  <p>Sayğac nömrəsi</p>
                  <h4>321</h4>
                  <p>Pasport nömrəsi</p>
                  <h4>AA1234567</h4>
                  <p>Status</p>
                  <h4>Tamamlanıb</h4>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <Tab.Container defaultActiveKey="statuslar">
                <Nav variant="tabs">
                  <Nav.Item>
                    <Nav.Link eventKey="statuslar">Statuslar</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="sekiller">Şəkillər</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="akt">Akt</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="xerite">Xəritə</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="yekun">Yekun</Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content className="mt-3">
                  <Tab.Pane eventKey="statuslar">
                    <div className="row">
                      <div className="col-md-3">
                        <h4>Partlayış</h4>
                        <p>Kateqoriya</p>
                        <p>Çağırış nömrəsi</p>
                        <p>Ad Soyad</p>
                        <p>Telefon nömrəsi</p>
                        <p>Qəza haqqında qısa şərh</p>
                        <p>Dispetçer</p>
                      </div>
                      <div className="col-md-3">
                        <h4>Partlayış</h4>
                        <p>Kateqoriya</p>
                        <p>Çağırış nömrəsi</p>
                        <p>Ad Soyad</p>
                        <p>Telefon nömrəsi</p>
                        <p>Qəza haqqında qısa şərh</p>
                        <p>Dispetçer</p>
                      </div>
                      <div className="col-md-3">
                        <h4>Partlayış</h4>
                        <p>Kateqoriya</p>
                        <p>Çağırış nömrəsi</p>
                        <p>Ad Soyad</p>
                        <p>Telefon nömrəsi</p>
                        <p>Qəza haqqında qısa şərh</p>
                        <p>Dispetçer</p>
                      </div>
                      <div className="col-md-3">
                        <h4>Partlayış</h4>
                        <p>Kateqoriya</p>
                        <p>Çağırış nömrəsi</p>
                        <p>Ad Soyad</p>
                        <p>Telefon nömrəsi</p>
                        <p>Qəza haqqında qısa şərh</p>
                        <p>Dispetçer</p>
                      </div>
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="sekiller">
                    <p>Burada şəkillər olacaq.</p>
                  </Tab.Pane>

                  <Tab.Pane eventKey="akt">
                    <p>Burada akt olacaq.</p>
                  </Tab.Pane>

                  <Tab.Pane eventKey="xerite">
                    <p>Burada xəritə olacaq.</p>
                  </Tab.Pane>

                  <Tab.Pane eventKey="yekun">
                    <p>Burada yekun məlumat olacaq.</p>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Bağla
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Show;
