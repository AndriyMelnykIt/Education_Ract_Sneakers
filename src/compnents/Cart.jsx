import React from 'react';

const Cart = () => {
  return (
    <div className="card">
      {/*favorite */}
      <div className="favorite">
        <img src="img/heart.png" alt="Unlike"/>
      </div>
      <img width={133} height={112} src="/img/sneakers/1.jpg" alt=""/>
      <h5>Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Ціна:</span>
          <b>759 uah</b>
        </div>
        <img width={30} height={30} src="img/plus.svg" alt=""/>
      </div>
    </div>
  );
};

export default Cart;