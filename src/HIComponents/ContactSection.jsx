import {Section} from "./Section";
import styles from "./ContactSection.module.css";

export function ContactSection() {
    return (
        <Section backgroundColor="#ff6b00" centered ariaLabelledBy="contact-heading">
            <h2 id="contact-heading" className={styles.heading}>Got questions?</h2>
            <p className={styles.description}>
                Unlock your potential and find the perfect course or program for you or your company.
            </p>
            <a href="/contact" className={styles.contactButton}>CONTACT US</a>
        </Section>
    );
}
