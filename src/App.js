import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Article from "./components/pages/Article";
import Bundle from "./components/pages/Bundle";
import DetailPurchase from "./components/pages/DetailPurchase";
import Home from "./components/pages/Home";
import Purchase from "./components/pages/Purchase";
import Trend from "./components/pages/Trend";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import Cart from "./components/pages/Cart";
import Settings from "./components/pages/Settings";
import ScrollToTop from "./components/actions/ScrollToTop";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/trend" component={Trend} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/trend/:id" exact component={Article} />
        <Route path="/bundle" exact component={Bundle} />
        <Route path="/purchase" exact component={Purchase} />
        <Route path="/purchase/:id" component={DetailPurchase} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/settings" exact component={Settings} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
