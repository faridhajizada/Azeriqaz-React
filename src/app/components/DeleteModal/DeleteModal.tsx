import { Modal, Button } from "react-bootstrap";

interface DeleteModalProps {
  show: boolean;
  onHide: () => void;
  onConfirm: () => void;
  title?: string;
  confirmText?: string;
  cancelText?: string;
}

export const DeleteModal = ({
  show,
  onHide,
  onConfirm,
  title,
  confirmText = "Bəli",
  cancelText = "Xeyir",
}: DeleteModalProps) => {
  return (
    <Modal show={show} onHide={onHide} centered size="md">
      <Modal.Body className="px-4">
        <div className="text-center">
          <div className="mb-3">
            <i
              className="fa-solid fa-circle-exclamation"
              style={{ fontSize: "8rem", color: "#f6c000" }}
            ></i>
          </div>

          <h3 className="mx-4 fs-semibold" style={{ margin: "40px 0" }}>
            {title}
          </h3>

          <div className="d-flex justify-content-center gap-3">
            <Button
              variant="danger"
              style={{ padding: "12px 30px" }}
              onClick={onConfirm}
            >
              {confirmText}
            </Button>
            <Button
              variant="outline-primary btn-active-light-primary"
              onClick={onHide}
              style={{ padding: "10px 24px" }}
            >
              {cancelText}
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
