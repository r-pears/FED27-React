import { memo, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./CharacterCard.module.css";

const CharacterCard = memo(function CharacterCard({
  character,
  isSelected,
  onToggleSelect,
}) {
  const renderCount = useRef(0);
  renderCount.current += 1;

  const characterId = character.url.split("/").filter(Boolean).pop();

  return (
    <div className={`${styles.card} ${isSelected ? styles.selected : ""}`}>
      <div className={styles.header}>
        <Link to={`/characters/${characterId}`} className={styles.name}>
          {character.name}
        </Link>
        <button
          className={styles.selectButton}
          onClick={() => onToggleSelect(characterId)}
          aria-label={isSelected ? "Deselect character" : "Select character"}
        >
          {isSelected ? "✓" : "○"}
        </button>
      </div>
      <div className={styles.details}>
        <p>
          <span>Height:</span> {character.height} cm
        </p>
        <p>
          <span>Mass:</span> {character.mass} kg
        </p>
        <p>
          <span>Gender:</span> {character.gender}
        </p>
      </div>
      <div className={styles.renderInfo}>Renders: {renderCount.current}</div>
    </div>
  );
});

export default CharacterCard;
