import styles from './Card.module.scss';

console.log(styles)

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.card__favorite}>
        <img src="/img/like.svg" alt="like" />
      </div>
      <img className={styles.card__img} width={133} height={112} src={props.imageUrl} alt="" />
      <p className={styles.card__text}>{props.title}</p>
      <div className={styles.card__bottom}>
        <div className={styles.card__price}>
          <span className={styles.card__price_title}>Цена:</span>
          <b className={styles.card__price_value}>{props.price} руб.</b>
        </div>
        <button className={styles.card__price_btn} onClick={() => alert(props.title)}>
          <svg className={styles.card__price_btn_img} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Card;
