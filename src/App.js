import { ProductProvider } from "./context/ProductContext";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";

function App() {
  return (
    <>
      <ProductProvider>
        <Product />
      </ProductProvider>
    </>
  );
}

export default App;
