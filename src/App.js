import React, { Fragment, useState } from "react";
import Header from "./Component/Layout/Header";
import Products from "./Component/Products/Products";
import Cart from "./Component/Cart/Cart";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Products />
      </main> 
      </Fragment>
  );
}
export default App;
