import {Section} from "./Section";
import styles from "./ProgramsSection.module.css";

export function ProgramsSection() {
    const programs = [
        {
            title: "DIPLOMA PROGRAMS",
            description: "Choose your tomorrow. Real projects, real clients, and real experience through an internship.",
            href: "/programs/diploma"
        },
        {
            title: "MASTER'S PROGRAMS",
            description: "Work with real clients, gain hands-on experience while working on your master's thesis.",
            href: "/programs/masters"
        },
        {
            title: "SHORT COURSES",
            description: "Learn the essential skills for the future in our short courses onsite and online. 1 day - 6 weeks.",
            href: "/programs/short-courses"
        },
        {
            title: "LONG UPSKILL COURSES",
            description: "Upskill and advance your career with our part-time online courses. 6 - 32 weeks.",
            href: "/programs/upskill"
        }
    ];

    return (
        <Section backgroundColor="#f5f5f5" ariaLabelledBy="programs-heading">
            <h2 id="programs-heading" className={styles.sectionTitle}>Explore our learning experiences</h2>
            <p className={styles.sectionSubtitle}>
                Advance your career, upskill to face the future, and take your business to the next level.
            </p>
            <div className={styles.programsGrid}>
                {programs.map((program) => (
                    <article key={program.href} className={styles.programCard}>
                        <h3>{program.title}</h3>
                        <p>{program.description}</p>
                        <a href={program.href} className={styles.learnMore}>Learn more →</a>
                    </article>
                ))}
            </div>
        </Section>
    );
}
