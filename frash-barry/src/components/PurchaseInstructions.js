import styles from '../styles/PurchaseInstructions.module.css';

export default function PurchaseInstructions() {
  const instructions = [
    "Выберите товар",
    "Заполните форму заказа",
    "Подтвердите заказ",
    "Получите свежую клубнику"
  ];

  return (
    <section className={styles.instructions} id="purchase-instructions">
      <h2>Как купить</h2>
      <div className={styles.cards}>
        {instructions.map((inst, index) => (
          <div key={index} className={styles.card}>
            <p>{inst}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
