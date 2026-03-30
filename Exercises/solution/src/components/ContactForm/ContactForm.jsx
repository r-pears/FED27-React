import { useState, useRef, useEffect } from "react";
import styles from "./ContactForm.module.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [validationError, setValidationError] = useState("");

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidationError("");

    if (!name.trim()) {
      setValidationError("Please enter your name");
      nameRef.current?.focus();
      return;
    }
    if (!email.trim()) {
      setValidationError("Please enter your email");
      emailRef.current?.focus();
      return;
    }
    if (!message.trim()) {
      setValidationError("Please enter a message");
      messageRef.current?.focus();
      return;
    }

    console.log({ name, email, message });

    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");

    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleClearAndRefocus = () => {
    setName("");
    setEmail("");
    setMessage("");
    setValidationError("");
    nameRef.current?.focus();
  };

  return (
    <div className={styles.contactForm}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.subtitle}>We'd love to hear from you!</p>

      {submitted && (
        <div className={styles.successMessage}>
          Thank you for your message! We'll get back to you soon.
        </div>
      )}

      {validationError && (
        <div className={styles.errorMessage}>{validationError}</div>
      )}

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            ref={nameRef}
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            ref={emailRef}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            ref={messageRef}
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            rows="5"
          />
        </div>

        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
          <button
            type="button"
            onClick={handleClearAndRefocus}
            className={styles.clearButton}
          >
            Clear & Refocus
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
