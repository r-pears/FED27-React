import {Section} from "./Section";
import styles from "./BusinessSection.module.css";

export function BusinessSection() {
    const benefits = [
        "Collaborate with our students to bring fresh thinking into your business",
        "Develop your top talent with a Master's degree",
        "Courses for your team",
        "Training solutions tailored to your business"
    ];

    return (
        <Section backgroundColor="#000" textColor="#fff" ariaLabelledBy="business-heading">
            <h2 id="business-heading" className={styles.sectionTitle}>OUR SOLUTIONS FOR BUSINESSES</h2>
            <p className={styles.businessIntro}>
                Whether you're exploring a tailored training programme, looking to upskill your team, 
                or collaborate with our students — we're here to assist your business.
            </p>
            <ul className={styles.businessList}>
                {benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                ))}
            </ul>
            <a href="/business" className={styles.ctaButton}>See business solutions</a>
        </Section>
    );
}
