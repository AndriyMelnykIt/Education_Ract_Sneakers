import React from "react";
import Cart from "./compnents/Cart";
import Header from "./compnents/Header";
import Drawer from "./compnents/Drawer";

function App() {
  return (
    <div className="wrapper clear">

      {/*Корзина*/}
      <Drawer/>

      {/*Header */}
      <Header/>

      {/*h1 and input*/}
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Усі красовки</h1>
          <div className="search-block d-flex">
            {/*Search*/}
            <img src="img/search.svg" alt=""/>
            <input type="text" placeholder="Пошук..."/>
          </div>
        </div>

        {/*Cart*/}
        <div className="d-flex">
          <Cart/>
        </div>
      </div>
    </div>
  );
}

export default App;