import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css";
import ProductInfoPage from "./pages/ProductInfoPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/page2">
          <ProductInfoPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
