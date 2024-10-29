import styles from '../styles/HeroSection.module.css';
import Header from './Header';

export default function HeroSection({ onContactClick }) {
  return (
      <section className={styles.hero} id="hero">
      
      <div className={styles.background}>
        <Header />
        <div className={styles.overlay}>
          <h1 className={styles.tittle}>King Berries </h1>
          <p className={styles.description}> Вкус, достойный королей!</p>
        </div>
        <button className={styles.cta} onClick={onContactClick}>Заказать</button>
      </div>
      <svg className={styles.wave} viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="#fffdf8" d="M0,64L30,85.3C60,107,120,149,180,165.3C240,181,300,171,360,160C420,149,480,139,540,160C600,181,660,235,720,240C780,245,840,203,900,170.7C960,138,1020,112,1080,117.3C1140,123,1200,161,1260,160C1320,160,1380,128,1410,112L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0V64Z"></path>
      </svg>
    </section>
    
    
  );
}