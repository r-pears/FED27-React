import {Link} from "react-router";
import styles from "./HeroComponent.module.css";

export function HeroComponent() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>Get ready for the unknown</h1>
                <p className={styles.heroText}>
                    Become part of our movement enabling you to make change happen in your career, your organization, and your life.
                </p>
                <div className={styles.heroButtons}>
                    <Link className={styles.buttonPrimary} to="#for-students">For students</Link>
                    <Link className={styles.buttonSecondary} to="#for-business">For business</Link>
                </div>
            </div>
        </section>
    )
}