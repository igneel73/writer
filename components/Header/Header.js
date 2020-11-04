import styles from "./Header.module.css";

export default function Header({ children }) {
  return (
    <div className={styles.header}>
      <h2 className={styles.h}>Writer</h2>
    </div>
  );
}
