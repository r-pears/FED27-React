import { useState, useCallback, useMemo, memo, useRef, useEffect } from "react";
import styles from "./PerformanceDemo.module.css";

const ChildComponent = memo(function ChildComponent({ name, onClick }) {
  const renderCount = useRef(0);
  renderCount.current += 1;
  console.log("ChildComponent rendered:", name, "- render count:", renderCount.current);

  return (
    <div className={styles.childComponent}>
      <p>Child: {name}</p>
      <p className={styles.renderCount}>Render count: {renderCount.current}</p>
      {onClick && <button onClick={onClick}>Click me</button>}
    </div>
  );
});

const ListItem = memo(function ListItem({ item, onRemove }) {
  const renderCount = useRef(0);
  renderCount.current += 1;
  console.log("ListItem rendered:", item.name, "- render count:", renderCount.current);

  return (
    <div className={styles.listItem}>
      <span>{item.name}</span>
      <span className={styles.renderCount}>Renders: {renderCount.current}</span>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
});

function PerformanceDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 5, name: "Item 5" },
  ]);

  const numbers = useMemo(() => {
    return Array.from({ length: 10000 }, (_, i) => i + 1);
  }, []);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  const handleClickWithCount = useCallback(() => {
    console.log("Count is:", count);
  }, [count]);

  const handleRemove = useCallback((id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const { filteredData, sum } = useMemo(() => {
    console.time("Expensive calculation");
    const filtered = numbers
      .filter((n) => n.toString().includes(searchTerm))
      .map((n) => ({ value: n, squared: n * n }));
    const total = filtered.reduce((acc, item) => acc + item.value, 0);
    console.timeEnd("Expensive calculation");
    return { filteredData: filtered, sum: total };
  }, [searchTerm, numbers]);

  return (
    <div className={styles.container}>
      <h1>Performance Demo</h1>
      <p className={styles.description}>
        Open the browser console to see render logs and timing information.
      </p>

      <section className={styles.section}>
        <h2>Part A: React.memo</h2>
        <p>
          The child components below are wrapped with <code>React.memo</code>.
          They only re-render when their props change.
        </p>

        <div className={styles.controls}>
          <div>
            <label>Count: {count}</label>
            <button onClick={() => setCount((c) => c + 1)}>Increment</button>
          </div>
          <div>
            <label>Text: </label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type something..."
            />
          </div>
        </div>

        <div className={styles.childrenContainer}>
          <ChildComponent name="Alice" onClick={handleClick} />
          <ChildComponent name="Bob" onClick={handleClickWithCount} />
        </div>

        <p className={styles.note}>
          Note: "Alice" only re-renders on mount because <code>handleClick</code> is
          memoized with <code>useCallback</code> and has no dependencies. "Bob"
          re-renders when count changes because <code>handleClickWithCount</code>{" "}
          depends on count.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Part B: useCallback with List</h2>
        <p>
          Each list item is memoized. Removing one item doesn't cause others to
          re-render because <code>handleRemove</code> is wrapped with{" "}
          <code>useCallback</code>.
        </p>

        <div className={styles.listContainer}>
          {items.map((item) => (
            <ListItem key={item.id} item={item} onRemove={handleRemove} />
          ))}
        </div>

        <button
          onClick={() =>
            setItems((prev) => [
              ...prev,
              { id: Date.now(), name: `Item ${prev.length + 1}` },
            ])
          }
        >
          Add Item
        </button>
      </section>

      <section className={styles.section}>
        <h2>Part C: useMemo - Expensive Calculations</h2>
        <p>
          This filters and processes 10,000 numbers. The calculation only runs
          when the search term changes, not when you increment the counter.
        </p>

        <div className={styles.controls}>
          <div>
            <label>Search numbers containing: </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="e.g., 42"
            />
          </div>
        </div>

        <div className={styles.results}>
          <p>
            Found {filteredData.length} numbers | Sum: {sum.toLocaleString()}
          </p>
          <p className={styles.note}>
            Check console for timing. Incrementing the counter above won't
            trigger the expensive calculation.
          </p>
        </div>
      </section>
    </div>
  );
}

export default PerformanceDemo;
