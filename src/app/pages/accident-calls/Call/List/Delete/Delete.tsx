import { Modal, Button } from "react-bootstrap";

interface DeleteProps {
  deleteItem: boolean;
  handleClose: () => void;
}

function Delete({ deleteItem, handleClose }: DeleteProps) {
  return (
    <Modal show={deleteItem} onHide={handleClose} centered size="md">
      <Modal.Body className="px-4">
        <div className="text-center">
          <div className="mb-3">
            <i
              className="fa-solid fa-circle-exclamation"
              style={{ fontSize: "8rem", color: "#f6c000" }}
            ></i>
          </div>

          <h3 className="mx-4 fs-semibold" style={{ margin: "40px 0" }}>
            Qeyd olunan qəza çağırışını silmək istədiyinizdən əminsiniz?
          </h3>

          <div className="d-flex justify-content-center gap-3">
            <Button
              variant="danger"
              style={{ padding: "12px 30px" }}
              onClick={handleClose}
            >
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
  );
}

export default Delete;
