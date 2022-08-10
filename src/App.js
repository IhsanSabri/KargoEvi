import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css";
import ProductInfoPage from "./pages/ProductInfoPage";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <ProductInfoPage />
      </Router>
    </div>
  );
}

export default App;
