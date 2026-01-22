function Modal({isOpen,onClose,children}) {
 
    if(!isOpen) return 
  return (
    <div>
        <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking content
      >
        <button className="modal-close" onClick={onClose}>
          ✖
        </button>
        {children}
      
    </div>
  
    </div>
  )
}

export default Modal;