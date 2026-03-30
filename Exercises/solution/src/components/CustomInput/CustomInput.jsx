import styles from './CustomInput.module.css';

function CustomInput({ label, error, className, ref, ...rest }) {
  return (
    <div className={`${styles.inputWrapper} ${className || ''}`}>
      {label && (
        <label className={styles.label}>{label}</label>
      )}
      <input
        ref={ref}
        className={`${styles.input} ${error ? styles.inputError : ''}`}
        {...rest}
      />
      {error && (
        <span className={styles.errorMessage}>{error}</span>
      )}
    </div>
  );
}

export default CustomInput;
