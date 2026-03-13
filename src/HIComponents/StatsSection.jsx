import {Section} from "./Section";
import styles from "./StatsSection.module.css";

export function StatsSection() {
    return (
        <Section backgroundColor="#fff" ariaLabelledBy="stats-heading">
            <h2 id="stats-heading" className={styles.sectionLabel}>Transformative learning experiences</h2>
            <p className={styles.statsIntro}>
                We prepare individuals and organizations to anticipate and adapt to the changes of tomorrow, today.
            </p>
            <dl className={styles.statsGrid}>
                <div className={styles.statItem}>
                    <dt className={styles.statNumber}>5000+</dt>
                    <dd className={styles.statLabel}>Full-time & part-time alumni globally</dd>
                </div>
                <div className={styles.statItem}>
                    <dt className={styles.statNumber}>100+</dt>
                    <dd className={styles.statLabel}>Active collaborators around the world</dd>
                </div>
                <div className={styles.statItem}>
                    <dt className={styles.statNumber}>25+</dt>
                    <dd className={styles.statLabel}>Years' experience running accredited programs</dd>
                </div>
            </dl>
        </Section>
    );
}
