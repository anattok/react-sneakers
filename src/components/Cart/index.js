import styles from './Cart.module.scss';

function Cart() {
    return (
        <div style={{ display: "none" }} className={styles.overlay}>
            <div className="cart">

                <div className={styles.cart__top}>
                    <h2 className={styles.cart__title}>Корзина</h2>
                    <img src="/img/cart-item-remove.svg" alt="close" className="cart__close" />
                </div>


                <div className={styles.cart_items}>

                    <div className={styles.cart_item}>
                        <div className={styles.cart_item__img}>
                            <img width={70} height={70} src="/img/sneakers/1.jpg" alt="" />
                        </div>
                        <div className={styles.cart_item__col}>
                            <p className={styles.cart_item__title}>Мужские Кроссовки Nike Air Max 270</p>
                            <b className={styles.cart_item__price}>12 999 руб.</b>
                        </div>
                        <div className={styles.cart_item__remove}>
                            <img width={32} height={32} src="/img/cart-item-remove.svg" alt="" />
                        </div>
                    </div>



                </div>

                <div className={styles.cart__block}>
                    <ul className={styles.cart__total}>
                        <li className={styles.cart__total_item}>
                            <span className={styles.cart__total_title}>Итого:</span>
                            <div className={styles.cart__total_dashed}></div>
                            <b className={styles.cart__total_value}>21 498 руб.</b>
                        </li>
                        <li className={styles.cart__total_item}>
                            <span className={styles.cart__total_title}>Налог 5%:</span>
                            <div className={styles.cart__total_dashed}></div>
                            <b className={styles.cart__total_value_procient}>1074 руб.</b>
                        </li>
                    </ul>

                    <button className={styles.cart__total_button}>Оформить заказ <img src="/img/cart-btn-arrow.svg" alt="arrow" /> </button>
                </div>

            </div>

        </div>
    );
}

export default Cart;