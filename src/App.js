import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { useState } from "react";
// import { useContext } from "react";

function App() {
  // const { cartItems } = useContext(ShopContext);
  const [count, setCount] = useState(0);
  function handleCount() {
    setCount(count + 1);
  }

  function handleNegCount() {
    setCount(count - 1);
  }

  return (
    <section className="App">
      <ShopContextProvider>
        <Router>
          <Navbar count={count} />
          <Routes>
            <Route path="/" element={<Shop handleCount={handleCount} />} />
            <Route
              path="/cart"
              element={
                <Cart
                  handleCount={handleCount}
                  handleNegCount={handleNegCount}
                />
              }
            />
          </Routes>
        </Router>
      </ShopContextProvider>
    </section>
  );
}

export default App;
