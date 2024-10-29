import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.overlay}>
        <div className={styles.logo}>
        <h2 className={styles.tittle}>King</h2>
      </div>
      <nav className={styles.nav}>
        <a href="#advantages" className={styles.navLink}>Преимущества</a>
        <a href="#purchase-instructions" className={styles.navLink}>Как купить</a>
        <a href="#producer-info" className={styles.navLink}>Производитель</a>
        <a href="/recipes" className={styles.navLink}>Рецепты</a>
      </nav>
      </div>
      
    </header>
  );
}
