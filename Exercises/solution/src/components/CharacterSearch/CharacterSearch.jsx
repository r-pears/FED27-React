import { useState, useMemo, useCallback } from "react";
import { useCharacters } from "../../context/CharacterContext";
import CharacterCard from "../CharacterCard/CharacterCard";
import styles from "./CharacterSearch.module.css";

function CharacterSearch() {
  const { characters, loading, error } = useCharacters();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedIds, setSelectedIds] = useState(new Set());

  const filteredCharacters = useMemo(() => {
    console.log("Filtering characters...");
    return characters.filter((char) =>
      char.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [characters, searchTerm]);

  const sortedCharacters = useMemo(() => {
    console.log("Sorting characters...");
    return [...filteredCharacters].sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];

      if (sortBy === "height" || sortBy === "mass") {
        aValue = aValue === "unknown" ? 0 : Number(aValue);
        bValue = bValue === "unknown" ? 0 : Number(bValue);
      } else {
        aValue = aValue?.toLowerCase() || "";
        bValue = bValue?.toLowerCase() || "";
      }

      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  }, [filteredCharacters, sortBy, sortOrder]);

  const selectionStats = useMemo(() => {
    const selected = characters.filter((c) => {
      const id = c.url.split("/").filter(Boolean).pop();
      return selectedIds.has(id);
    });

    if (selected.length === 0) {
      return { count: 0, avgHeight: 0, avgMass: 0 };
    }

    const heights = selected
      .map((c) => Number(c.height))
      .filter((h) => !isNaN(h));
    const masses = selected
      .map((c) => Number(c.mass))
      .filter((m) => !isNaN(m));

    return {
      count: selected.length,
      avgHeight: heights.length
        ? Math.round(heights.reduce((a, b) => a + b, 0) / heights.length)
        : 0,
      avgMass: masses.length
        ? Math.round(masses.reduce((a, b) => a + b, 0) / masses.length)
        : 0,
    };
  }, [characters, selectedIds]);

  const handleToggleSelect = useCallback((id) => {
    setSelectedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  }, []);

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleSortByChange = useCallback((e) => {
    setSortBy(e.target.value);
  }, []);

  const handleSortOrderChange = useCallback((e) => {
    setSortOrder(e.target.value);
  }, []);

  const handleClearSelection = useCallback(() => {
    setSelectedIds(new Set());
  }, []);

  if (loading) return <p className={styles.loading}>Loading characters...</p>;
  if (error) return <p className={styles.error}>Error: {error}</p>;

  return (
    <div className={styles.container}>
      <h1>Character Search</h1>
      <p className={styles.description}>
        An optimized search component using <code>useMemo</code>,{" "}
        <code>useCallback</code>, and <code>React.memo</code>. Open the console
        to see when filtering and sorting run.
      </p>

      <div className={styles.controls}>
        <div className={styles.searchBox}>
          <label htmlFor="search">Search:</label>
          <input
            id="search"
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search by name..."
          />
        </div>

        <div className={styles.sortControls}>
          <div>
            <label htmlFor="sortBy">Sort by:</label>
            <select id="sortBy" value={sortBy} onChange={handleSortByChange}>
              <option value="name">Name</option>
              <option value="height">Height</option>
              <option value="mass">Mass</option>
            </select>
          </div>

          <div>
            <label htmlFor="sortOrder">Order:</label>
            <select
              id="sortOrder"
              value={sortOrder}
              onChange={handleSortOrderChange}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>
      </div>

      {selectionStats.count > 0 && (
        <div className={styles.stats}>
          <h3>Selection Statistics</h3>
          <div className={styles.statsGrid}>
            <div>
              <span>Selected:</span> {selectionStats.count} characters
            </div>
            <div>
              <span>Avg Height:</span> {selectionStats.avgHeight} cm
            </div>
            <div>
              <span>Avg Mass:</span> {selectionStats.avgMass} kg
            </div>
          </div>
          <button onClick={handleClearSelection} className={styles.clearButton}>
            Clear Selection
          </button>
        </div>
      )}

      <div className={styles.resultsInfo}>
        Showing {sortedCharacters.length} of {characters.length} characters
      </div>

      <div className={styles.grid}>
        {sortedCharacters.map((character) => {
          const characterId = character.url.split("/").filter(Boolean).pop();
          return (
            <CharacterCard
              key={characterId}
              character={character}
              isSelected={selectedIds.has(characterId)}
              onToggleSelect={handleToggleSelect}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CharacterSearch;
