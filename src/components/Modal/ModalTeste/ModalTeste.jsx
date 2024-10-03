import "./ModalTesteStyled.css";

const ModalTeste = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="modal-close" onClick={onClose}>
            X
          </button>
          {children}
        </div>
      </div>
    );
  };
  
  export default ModalTeste;
