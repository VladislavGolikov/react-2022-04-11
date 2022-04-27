import classnames from "classnames";
import styles from "./styles.module.scss";

export const Basket = ({ className }) => {

    const name='здесь будет название продуктов';
    const quantity=55;
  return (
    <div className={classnames(styles.root, className)}>
      <span className={classnames(styles.title, className)}>Наша корзина:</span>
      <div className={classnames(styles.name, className)}>{name}</div>
      <div className={classnames(styles.quantity, className)}>{quantity}</div>
      <button className={classnames(styles.drop, className)}>Очистить корзину</button>
    </div>
  );
};
