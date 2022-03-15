import ContactForm from "./ContactForm"
import "./Modal.css"
const Modal = ({children,closeModal,isOpen}) => {
 const handleModalContainerClick=(e)=>{e.stopPropagation()}
  return ( 
  <article className={`modal ${isOpen&&"is-open"}`}onClick={closeModal}>
  <div className="modal-container"onClick={handleModalContainerClick}>
    <button className="modal-close" onClick={closeModal}>X</button>
    {children}
  </div>
  </article>
       );
}
 
export default Modal;