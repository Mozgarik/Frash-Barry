import styles from '../styles/ContactFormModal.module.css';

export default function ContactFormModal({ onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Спасибо за ваш заказ! Мы свяжемся с вами в ближайшее время.");
    onClose();
  };

  return (
    <div className={styles.modalBackdrop}>
      {/* <div className={styles.modalContent}>
        <h2>Оставьте свои данные</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Ваше имя:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="phone">Телефон:</label>
          <input type="tel" id="phone" name="phone" required />

          <button type="submit" className={styles.submitBtn}>Отправить</button>
        </form>
        <button onClick={onClose} className={styles.closeBtn}>Закрыть</button>
      </div> */}
    </div>
  );
}
