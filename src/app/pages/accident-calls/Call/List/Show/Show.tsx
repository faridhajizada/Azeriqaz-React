import { Modal, Button, Tab, Nav, Row, Col } from "react-bootstrap";
import "./Show.scss";
import Map from "./Map/Map";
import Status from "./Status/Status";

interface ShowProps {
  show: boolean;
  handleClose: () => void;
}

function Show({ show, handleClose }: ShowProps) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="xl"
      dialogClassName="modal-dialog-metronic"
      contentClassName="modal-content-metronic"
    >
      <Modal.Header closeButton className="modal-header-metronic">
        <Modal.Title className="modal-title-metronic">
          <span className="svg-icon svg-icon-2x">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                opacity="0.3"
                d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z"
                fill="currentColor"
              />
              <path
                d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="ms-3">Qəza çağırışı #AQ-2024-1</span>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="modal-body-metronic p-0">
        <Tab.Container defaultActiveKey="umumi">
          <Row className="g-0 h-100">
            <Col md={3} className="bg-light-dark">
              <Nav variant="pills" className="flex-column nav-pills-metronic">
                <Nav.Item>
                  <Nav.Link eventKey="umumi" className="nav-link-metronic">
                    <span className="nav-icon">
                      <i className="fas fa-info-circle"></i>
                    </span>
                    <span className="nav-text">Ümumi məlumat</span>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="statuslar" className="nav-link-metronic">
                    <span className="nav-icon">
                      <i className="fas fa-history"></i>
                    </span>
                    <span className="nav-text">Status tarixçəsi</span>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="sekiller" className="nav-link-metronic">
                    <span className="nav-icon">
                      <i className="fas fa-image"></i>
                    </span>
                    <span className="nav-text">Şəkillər</span>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="akt" className="nav-link-metronic">
                    <span className="nav-icon">
                      <i className="fas fa-file-alt"></i>
                    </span>
                    <span className="nav-text">Akt sənədi</span>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="xerite" className="nav-link-metronic">
                    <span className="nav-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </span>
                    <span className="nav-text">Xəritədə yeri</span>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="yekun" className="nav-link-metronic">
                    <span className="nav-icon">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <span className="nav-text">Yekun</span>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col md={9} className="p-6">
              <Tab.Content className="h-100">
                <Tab.Pane eventKey="umumi" className="h-100">
                  <div className="d-flex flex-column h-100">
                    <div className="mb-6">
                      <h4 className="mb-4 text-primary"> Ümumi məlumatlar</h4>
                      <div className="separator separator-dashed mb-6"></div>

                      <Row>
                        <Col md={6}>
                          <div className="d-flex flex-column mb-8">
                            <span className="text-gray-600 fs-7 fw-bold mb-2">
                              Kateqoriya
                            </span>
                            <span className="text-dark fs-6 fw-bolder">
                              Partlayış
                            </span>
                          </div>
                          <div className="d-flex flex-column mb-8">
                            <span className="text-gray-600 fs-7 fw-bold mb-2">
                              Çağırış nömrəsi
                            </span>
                            <span className="text-dark fs-6 fw-bolder">
                              AQ-2024-1
                            </span>
                          </div>
                          <div className="d-flex flex-column mb-8">
                            <span className="text-gray-600 fs-7 fw-bold mb-2">
                              Ad Soyad
                            </span>
                            <span className="text-dark fs-6 fw-bolder">
                              Elvin Malikov
                            </span>
                          </div>
                          <div className="d-flex flex-column mb-8">
                            <span className="text-gray-600 fs-7 fw-bold mb-2">
                              Telefon nömrəsi
                            </span>
                            <span className="text-dark fs-6 fw-bolder">
                              0506567001
                            </span>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="d-flex flex-column mb-8">
                            <span className="text-gray-600 fs-7 fw-bold mb-2">
                              Fin
                            </span>
                            <span className="text-dark fs-6 fw-bolder">
                              5zk92ne
                            </span>
                          </div>
                          <div className="d-flex flex-column mb-8">
                            <span className="text-gray-600 fs-7 fw-bold mb-2">
                              Abunəçi kodu
                            </span>
                            <span className="text-dark fs-6 fw-bolder">
                              456456
                            </span>
                          </div>
                          <div className="d-flex flex-column mb-8">
                            <span className="text-gray-600 fs-7 fw-bold mb-2">
                              Sayğac nömrəsi
                            </span>
                            <span className="text-dark fs-6 fw-bolder">
                              321
                            </span>
                          </div>
                          <div className="d-flex flex-column mb-8">
                            <span className="text-gray-600 fs-7 fw-bold mb-2">
                              Status
                            </span>
                            <span className="badge badge-light-success fs-7 fw-bold">
                              Tamamlanıb
                            </span>
                          </div>
                        </Col>
                      </Row>
                    </div>

                    <div className="mt-auto">
                      <div className="card bg-light">
                        <div className="card-body p-4">
                          <h5 className="text-gray-800 fw-bold mb-4">Qeyd</h5>
                          <p className="text-gray-600 mb-0">test qeyd</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="statuslar" className="h-100">
                  <Status />
                </Tab.Pane>
                <Tab.Pane eventKey="sekiller" className="h-100">
                  <h4 className="mb-4 text-primary">Şəkillər</h4>
                  <Row>
                    {[1, 2, 3, 4].map((item) => (
                      <Col md={3} key={item} className="mb-4">
                        <div className="card h-100">
                          <img
                            src={`https://picsum.photos/300/200?random=${item}`}
                            className="card-img-top"
                            alt={`Şəkil ${item}`}
                          />
                          <div className="card-body">
                            <p className="card-text text-muted">
                              01.06.2024 {10 + item}:00
                            </p>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="akt" className="h-100">
                  <h4 className="mb-4 text-primary">Akt sənədi</h4>
                  <div className="border p-4 text-center bg-light">
                    <p className="text-muted">Akt sənədi yüklənəcək</p>
                    <Button variant="primary" className="mt-3">
                      Akt yüklə
                    </Button>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="xerite" className="h-100">
                  <Map />
                </Tab.Pane>
                <Tab.Pane eventKey="yekun" className="h-100">
                  <p>yekun</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Modal.Body>
    </Modal>
  );
}

export default Show;
