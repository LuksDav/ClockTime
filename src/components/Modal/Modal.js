import "./Modal.scss"

const Modal = ({id="modal", onClose = () => {}, children}) => {

  const handleOutsideClick = (e) => {
    if(e.target.id === id) onClose();
  }

  return (
    <div id={id} className="modal-container" onClick={handleOutsideClick}>
      <div className="modal-content">
        <button onClick={onClose} className="Close">X</button>
        <h2>Escolha uma Região</h2>
        {children}
        </div>
    </div>
  )
}

export default Modal;