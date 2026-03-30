import { NavLink } from "react-router-dom";
import { useCharacters } from "../../context/CharacterContext";
import { useFavorites } from "../../context/FavoritesContext";
import { useTheme } from "../../context/ThemeContext";
import styles from "./Navbar.module.css";

function Navbar() {
  const { characters } = useCharacters();
  const { favorites } = useFavorites();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>React Exercises</div>
      <ul className={styles.navLinks}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/characters"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Characters ({characters.length})
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorites"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Favorites ({favorites.length})
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/stopwatch"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Stopwatch
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Search
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/modal-demo"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Modal Demo
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/performance"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Performance
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/character-search"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Character Search
          </NavLink>
        </li>
      </ul>
      <button
        onClick={toggleTheme}
        className={styles.themeToggle}
        aria-label="Toggle theme"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </nav>
  );
}

export default Navbar;
