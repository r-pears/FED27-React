import {NavLink} from "react-router";
import styles from "./Navbar.module.css";

export function Navbar(){
    return (
        <nav className={styles.navbar} aria-label="Main navigation">
            <NavLink to='/' className={styles.logo}>HYPER ISLAND</NavLink>
            <ul className={styles.navLinks}>
                <li className={styles.navItem}>
                    <button type="button" className={styles.navLink} aria-expanded="false" aria-haspopup="true">
                        Programs & courses
                    </button>
                    <ul className={styles.dropdown}>
                        <li><NavLink to='/programs/diploma' className={styles.dropdownLink}>Diploma Programs</NavLink></li>
                        <li><NavLink to='/programs/masters' className={styles.dropdownLink}>Master's Programs</NavLink></li>
                        <li><NavLink to='/programs/short-courses' className={styles.dropdownLink}>Short Courses</NavLink></li>
                        <li><NavLink to='/programs/upskill' className={styles.dropdownLink}>Long Upskill Courses</NavLink></li>
                    </ul>
                </li>
                <li className={styles.navItem}>
                    <button type="button" className={styles.navLink} aria-expanded="false" aria-haspopup="true">
                        For businesses
                    </button>
                    <ul className={styles.dropdown}>
                        <li><NavLink to='/business/partnerships' className={styles.dropdownLink}>Partner with our students</NavLink></li>
                        <li><NavLink to='/business/training' className={styles.dropdownLink}>Corporate Training</NavLink></li>
                        <li><NavLink to='/business/solutions' className={styles.dropdownLink}>Business Solutions</NavLink></li>
                    </ul>
                </li>
                <li className={styles.navItem}>
                    <NavLink to='/partnerships' className={styles.navLink}>Partnerships</NavLink>
                </li>
                <li className={styles.navItem}>
                    <button type="button" className={styles.navLink} aria-expanded="false" aria-haspopup="true">
                        Locations
                    </button>
                    <ul className={styles.dropdown}>
                        <li><NavLink to='/locations/stockholm' className={styles.dropdownLink}>Stockholm</NavLink></li>
                        <li><NavLink to='/locations/london' className={styles.dropdownLink}>London</NavLink></li>
                        <li><NavLink to='/locations/manchester' className={styles.dropdownLink}>Manchester</NavLink></li>
                        <li><NavLink to='/locations/singapore' className={styles.dropdownLink}>Singapore</NavLink></li>
                        <li><NavLink to='/locations/sao-paulo' className={styles.dropdownLink}>São Paulo</NavLink></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}