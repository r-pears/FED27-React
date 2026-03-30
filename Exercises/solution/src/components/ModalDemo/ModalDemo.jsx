import { useState, useRef } from 'react';
import Modal from '../Modal/Modal';
import styles from './ModalDemo.module.css';

function ModalDemo() {
  const [isBasicModalOpen, setIsBasicModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  
  const basicButtonRef = useRef(null);
  const formButtonRef = useRef(null);
  const confirmButtonRef = useRef(null);

  return (
    <div className={styles.modalDemo}>
      <h1 className={styles.title}>Modal Demo</h1>
      <p className={styles.subtitle}>
        Test focus management with accessible modals
      </p>
      
      <div className={styles.instructions}>
        <h2>Instructions</h2>
        <ul>
          <li>Click a button to open a modal</li>
          <li>Notice focus moves into the modal automatically</li>
          <li>Press <kbd>Tab</kbd> to cycle through focusable elements</li>
          <li>Press <kbd>Shift + Tab</kbd> to cycle backwards</li>
          <li>Press <kbd>Escape</kbd> to close the modal</li>
          <li>Notice focus returns to the button that opened the modal</li>
        </ul>
      </div>
      
      <div className={styles.buttons}>
        <button
          ref={basicButtonRef}
          onClick={() => setIsBasicModalOpen(true)}
          className={styles.demoButton}
        >
          Open Basic Modal
        </button>
        
        <button
          ref={formButtonRef}
          onClick={() => setIsFormModalOpen(true)}
          className={styles.demoButton}
        >
          Open Form Modal
        </button>
        
        <button
          ref={confirmButtonRef}
          onClick={() => setIsConfirmModalOpen(true)}
          className={styles.demoButton}
        >
          Open Confirm Modal
        </button>
      </div>
      
      <Modal
        isOpen={isBasicModalOpen}
        onClose={() => setIsBasicModalOpen(false)}
        title="Basic Modal"
      >
        <p>
          This is a basic modal with focus trapping. Try pressing Tab to cycle
          through the focusable elements (close button, cancel, confirm).
        </p>
        <p>
          Press Escape to close and notice how focus returns to the button
          that opened this modal.
        </p>
      </Modal>
      
      <Modal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        title="Form Modal"
      >
        <form className={styles.modalForm}>
          <div className={styles.formGroup}>
            <label htmlFor="modal-name">Name</label>
            <input
              type="text"
              id="modal-name"
              placeholder="Enter your name"
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="modal-email">Email</label>
            <input
              type="email"
              id="modal-email"
              placeholder="Enter your email"
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="modal-message">Message</label>
            <textarea
              id="modal-message"
              placeholder="Enter your message"
              rows="3"
              className={styles.textarea}
            />
          </div>
        </form>
      </Modal>
      
      <Modal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        title="Confirm Action"
      >
        <p>
          Are you sure you want to proceed with this action? This cannot be undone.
        </p>
      </Modal>
    </div>
  );
}

export default ModalDemo;
