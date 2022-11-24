function Cart() {
    return (
        <div style={{ display: "none" }} className="overlay">
            <div className="cart">

                <div className="cart__top">
                    <h2 className="cart__title">Корзина</h2>
                    <img src="/img/cart-item-remove.svg" alt="close" className="cart__close" />
                </div>


                <div className="cart-items">

                    <div className="cart-item">
                        <div className="cart-item__img">
                            <img width={70} height={70} src="/img/sneakers/1.jpg" alt="" />
                        </div>
                        <div className="cart-item__col">
                            <p className="cart-item__title">Мужские Кроссовки Nike Air Max 270</p>
                            <b className="cart-item__price">12 999 руб.</b>
                        </div>
                        <div className="cart-item__remove">
                            <img width={32} height={32} src="/img/cart-item-remove.svg" alt="" />
                        </div>
                    </div>

                    

                </div>

                <div className="cart__block">
                    <ul className="cart__total">
                        <li className="cart__total-item">
                            <span className="cart__total-title">Итого:</span>
                            <div className="cart__total-dashed"></div>
                            <b className="cart__total-value">21 498 руб.</b>
                        </li>
                        <li className="cart__total-item">
                            <span className="cart__total-title">Налог 5%:</span>
                            <div className="cart__total-dashed"></div>
                            <b className="cart__total-value-procient">1074 руб.</b>
                        </li>
                    </ul>

                    <button className="cart__total-button">Оформить заказ <img src="/img/cart-btn-arrow.svg" alt="arrow" /> </button>
                </div>

            </div>

        </div>
    );
}

export default Cart;