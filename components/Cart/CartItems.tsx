import React from 'react';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import Image from 'next/image';
import styles from './../../styles/navigationBar.module.scss';
interface ICartItems {
  image: { formats: { thumbnail: { url: string } } };
  name: string;
  _id: string;
}

const CartItems = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const cartItem = [...cartItems];

  console.log(cartItem);

  const clearItems = () => {
    return removeFromCart();
  };

  return (
    <div className={styles.cartItems}>
      {' '}
      {cartItem?.map((c: ICartItems) => (
        <div key={c._id}>
          <Image
            src={c.image.formats.thumbnail.url}
            alt={c.name}
            width={70}
            height={50}
          />

          <p>{c.name}</p>
          <button className={styles.cartItems__cartBtn} onClick={clearItems}>
            {' '}
            Clear
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
