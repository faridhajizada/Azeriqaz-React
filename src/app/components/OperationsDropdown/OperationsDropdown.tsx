type Operation = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
};

type Props = {
  items: Operation[];
};

const OperationsDropdown: React.FC<Props> = ({ items }) => (
  <div className="dropdown">
    <button
      className="btn btn-light-primary fw-semibold dropdown-toggle"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Əməliyyatlar
    </button>
    <ul className="dropdown-menu shadow rounded-3 py-3">
      {items.map((item, idx) => (
        <li key={idx}>
          <button
            className="dropdown-item fw-bold text-gray-700 px-4 py-2 d-flex align-items-center gap-2"
            type="button"
            onClick={item.onClick}
            disabled={item.disabled}
          >
            {item.icon && <span>{item.icon}</span>}
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default OperationsDropdown;
