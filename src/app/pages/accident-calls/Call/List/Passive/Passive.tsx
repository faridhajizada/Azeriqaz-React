import { Modal, Button, Form } from "react-bootstrap";

interface PassiveProps {
  passive: Boolean;
  handleClose: () => void;
}

function Passive({ passive, handleClose }: PassiveProps) {
  return (
    <>
      <Modal show={passive} onHide={handleClose} centered size="md">
        <Modal.Body className="px-4">
          <div className="text-center">
            <div className="mb-3">
              <i
                className="fa-solid fa-circle-exclamation"
                style={{ fontSize: "8rem", color: "#f6c000" }}
              ></i>
            </div>

            <h3
              className="mx-4 fs-semibold"
              style={{ width: "-webkit-fill-available;" }}
            >
              Qeyd olunan qəza çağırışını passiv etmək istədiyinizdən əminsiniz?
            </h3>

            <div className="d-flex justify-content-center">
              <Form.Control
                type="text"
                placeholder="Səbəb daxil edin..."
                className="mb-4"
                style={{ width: "60%", margin: "20px 0" }}
              />
            </div>

            <div className="d-flex justify-content-center gap-3">
              <Button variant="danger" style={{ padding: "12px 30px" }}>
                Bəli
              </Button>
              <Button
                variant="outline-primary btn-active-light-primary"
                onClick={handleClose}
                style={{ padding: "10px 24px" }}
              >
                Xeyir
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Passive;
