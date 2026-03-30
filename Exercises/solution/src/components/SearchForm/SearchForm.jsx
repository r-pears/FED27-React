import { useState, useRef, useEffect } from 'react';
import CustomInput from '../CustomInput/CustomInput';
import { useCharacters } from '../../context/CharacterContext';
import useDebounce from '../../hooks/useDebounce';
import { Link } from 'react-router-dom';
import styles from './SearchForm.module.css';

function SearchForm() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const searchInputRef = useRef(null);
  const { characters } = useCharacters();
  
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setResults([]);
      return;
    }

    const filtered = characters.filter(character =>
      character.name.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
    
    setResults(filtered);
  }, [debouncedQuery, characters]);

  const handleClear = () => {
    setQuery('');
    setResults([]);
    searchInputRef.current?.focus();
  };

  const getIdFromUrl = (url) => {
    return new URL(url).pathname.split('/').filter(Boolean).pop();
  };

  const hasSearched = debouncedQuery.trim().length > 0;

  return (
    <div className={styles.searchForm}>
      <h1 className={styles.title}>Search Characters</h1>
      <p className={styles.subtitle}>Find your favorite Star Wars characters (live search with debounce)</p>
      
      <div className={styles.form}>
        <CustomInput
          ref={searchInputRef}
          type="text"
          label="Search"
          placeholder="Start typing to search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        
        <div className={styles.buttons}>
          <button
            type="button"
            onClick={handleClear}
            className={styles.clearButton}
          >
            Clear
          </button>
          <button
            type="button"
            onClick={() => searchInputRef.current?.focus()}
            className={styles.focusButton}
          >
            Focus Search
          </button>
        </div>
      </div>
      
      {hasSearched && (
        <div className={styles.results}>
          <h2 className={styles.resultsTitle}>
            {results.length} result{results.length !== 1 ? 's' : ''} found
          </h2>
          
          {results.length > 0 ? (
            <ul className={styles.resultsList}>
              {results.map((character) => (
                <li key={character.url} className={styles.resultItem}>
                  <Link
                    to={`/characters/${getIdFromUrl(character.url)}`}
                    className={styles.resultLink}
                  >
                    {character.name}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.noResults}>
              No characters found matching "{debouncedQuery}"
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchForm;
