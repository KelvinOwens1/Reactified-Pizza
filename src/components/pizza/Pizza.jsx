import React from 'react';

function Pizza({ pizza }) {
  const { name, ingredients, price, photoName, soldOut } = pizza;
  const pizzaClassName = soldOut ? 'pizza sold-out' : 'pizza';

  return (
    <li className={pizzaClassName}>
      <h3>{name}</h3>
      <img src={photoName} alt={name} />
      <p>Ingredients: {ingredients}</p>
      <p>Price: ${price}</p>
      {soldOut && <p>Sold Out</p>}
    </li>
  );
}

export default Pizza;
