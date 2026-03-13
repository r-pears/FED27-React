import styles from "./Section.module.css";

export function Section({
  backgroundColor,
  textColor,
  centered,
  ariaLabelledBy,
  className,
  children,
}) {
  const sectionStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
  };

  const combinedClassName =
    `${styles.section} ${centered ? styles.centered : ""} ${className || ""}`.trim();

  return (
    <section
      className={combinedClassName}
      style={sectionStyle}
      aria-labelledby={ariaLabelledBy}
    >
      {children}
    </section>
  );
}
