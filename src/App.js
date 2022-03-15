import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ProductViewModal from "./components/product-view-modal/ProductViewModal";
import MyRoutes from "./routes/MyRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container">
          <div className="main">
            <MyRoutes />
          </div>
        </div>
        <Footer />
        <ProductViewModal />
      </BrowserRouter>
    </div>
  );
}

export default App;
