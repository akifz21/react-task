import { Route, Routes } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <ProductProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="product/:id" element={<Product />} />
          </Routes>
        </CartProvider>
      </ProductProvider>
    </>
  );
}

export default App;
