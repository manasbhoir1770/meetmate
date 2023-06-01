// import React from 'react';
// import './Modal.css';

// const Modal = ({isVisible, handleClose, children}) => {
//   return (
//     isVisible && (
//       <div className="modal-background">
//         <div className="modal">
//           <span className="close-icon" onClick={handleClose}>
//             &times;
//           </span>
//           {children}
//         </div>
//       </div>
//     )
//   );
// };

// export default Modal;




import React from 'react';
import './Modal.css';

const Modal = ({isModalOpen, closeModal}) => {
  return (
    <div className={`modal ${isModalOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close-button" onClick={closeModal}>&times;</span>
        <p>This is a modal window.</p>
        <p>Use this to show alert messages or any other information to the user.</p>

        <button></button>
      </div>
    </div>
  );
}

export default Modal;