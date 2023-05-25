import { Route, Routes } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <>
      <ProductProvider>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<Product />} />
        </Routes>
      </ProductProvider>
    </>
  );
}

export default App;
