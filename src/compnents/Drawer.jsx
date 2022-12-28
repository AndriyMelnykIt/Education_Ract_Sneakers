import React from 'react';

const Drawer = () => {
  return (
    <div style={{display: 'none'}} className="overlay">
      <div className="drawer ">
        <h2 className="mb-30 d-flex justify-between">
          Кошик
          <img className="cu-p" width={30} height={30} src="img/plus.svg" alt=""/>
        </h2>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div className="cartItemImg" style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}}></div>
            <div className="mr-20">
              <p className="mb-5">Nike Blazer Mid Suede</p>
              <b>749 uah </b>
            </div>
            <img width={30} height={30} src="img/plus.svg" alt=""/>
          </div>
          <div className="cartItem d-flex align-center">
            <div style={{backgroundImage: 'url(/img/sneakers/2.jpg)'}} className="cartItemImg"></div>
            <div className="mr-20">
              <p className="mb-5">Nike Blazer Mid Suede</p>
              <b>899 uah </b>
            </div>
            <img width={30} height={30} src="img/plus.svg" alt=""/>
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Всього:</span>
              <div></div>
              <b> 1648 uah</b>
            </li>
          </ul>
          <button className="greenButton">Оформити замовлення<img src='img/arrow.svg'/></button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;