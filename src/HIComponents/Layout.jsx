import {Outlet} from "react-router";
import {Navbar} from "./Navbar";
import {Footer} from "./Footer";
import styles from "./Layout.module.css";

export function Layout(){
    return(
        <div className={styles.layout}>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}