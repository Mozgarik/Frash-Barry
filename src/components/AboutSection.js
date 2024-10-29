import styles from '../styles/AboutSection.module.css';
import plantacia from '../images/plantacia.jpg'
import upokovka from '../images/upokovka.jpg'
import perevoz from '../images/perevoz.jpg'

export default function AboutSection() {
  return (
    <section className={styles.about}>
      <h2 className={styles.tittle}>О нас</h2>
        <ul className={styles.aboutList}>
          <li className={styles.aboutItem}><img alt={"клубника"} src={plantacia}  className={styles.photo}></img><p className={styles.description}> Мы — компания, которая заботится о том, чтобы ваши столы всегда украшала самая свежая и вкусная клубника. Наши ягоды выращиваются на солнечных плантациях Греции, где идеальный климат и заботливые фермеры создают идеальные условия для созревания ягод.</p></li>
          <li className={styles.aboutItem}><p className={styles.description}>Мы работаем только с проверенными поставщиками, которые гарантируют качество и натуральность продукта. Каждый этап — от посадки до сбора и транспортировки — тщательно контролируется, чтобы на вашем столе оказывались только спелые, сочные и экологически чистые ягоды. </p><img alt={"клубника"} src={upokovka} className={styles.photo}></img></li>
          <li className={styles.aboutItem}><img alt={"клубника"} src={perevoz} className={styles.photo}></img><p className={styles.description}>Доставка осуществляется непосредственно из Греции, что позволяет нам сохранить свежесть и аромат ягод. Наши партнеры используют современные технологии упаковки и транспортировки, чтобы клубника достигала вас в идеальном состоянии.</p></li>
        </ul>
      {/* Место для фотографии плантаций в Греции или процесса упаковки */}
    </section>
  );
}
