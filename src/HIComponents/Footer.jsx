import {Link} from "react-router";
import styles from "./Footer.module.css";

export function Footer(){
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerBrand}>
                    <p className={styles.footerLogo}>HYPER ISLAND</p>
                    <p>Get ready for the unknown</p>
                </div>
                <nav className={styles.footerNav} aria-label="Programs">
                    <p className={styles.footerNavTitle}>Programs</p>
                    <ul>
                        <li><Link to="/programs/diploma">Diploma Programs</Link></li>
                        <li><Link to="/programs/masters">Master's Programs</Link></li>
                        <li><Link to="/programs/short-courses">Short Courses</Link></li>
                        <li><Link to="/programs/upskill">Upskill Courses</Link></li>
                    </ul>
                </nav>
                <nav className={styles.footerNav} aria-label="Company">
                    <p className={styles.footerNavTitle}>Company</p>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/partnerships">Partnerships</Link></li>
                        <li><Link to="/business">For Businesses</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <nav className={styles.footerNav} aria-label="Locations">
                    <p className={styles.footerNavTitle}>Locations</p>
                    <ul>
                        <li><Link to="/locations/stockholm">Stockholm</Link></li>
                        <li><Link to="/locations/london">London</Link></li>
                        <li><Link to="/locations/manchester">Manchester</Link></li>
                        <li><Link to="/locations/singapore">Singapore</Link></li>
                    </ul>
                </nav>
            </div>
            <div className={styles.footerBottom}>
                <p><small>© {new Date().getFullYear()} Hyper Island. All rights reserved.</small></p>
                <nav className={styles.footerLinks} aria-label="Legal">
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/terms">Terms of Use</Link>
                </nav>
            </div>
        </footer>
    )
}
