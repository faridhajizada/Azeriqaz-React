import { Modal, Button, Tab, Nav, Row, Col } from "react-bootstrap";
import "./Show.scss";
import Map from "./Map/Map";
import Status from "./Status/Status";
import Pictures from "./Pictures/Pictures";
import Akt from "./Akt/Akt";
import Ended from "./Ended/Ended";
import Main from "./Main/Main";

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
      <Modal.Header closeButton className="bg-primary">
        <Modal.Title className="text-white">
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
                  <Main />
                </Tab.Pane>

                <Tab.Pane eventKey="statuslar" className="h-100">
                  <Status />
                </Tab.Pane>
                <Tab.Pane eventKey="sekiller" className="h-100">
                  <Pictures />
                </Tab.Pane>
                <Tab.Pane eventKey="akt" className="h-100">
                  <Akt />
                </Tab.Pane>
                <Tab.Pane eventKey="xerite" className="h-100">
                  <Map />
                </Tab.Pane>
                <Tab.Pane eventKey="yekun" className="h-100">
                  <Ended />
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
