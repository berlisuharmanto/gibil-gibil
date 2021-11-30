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
import PaymentDetails from "./components/pages/PaymentDetails";
import BuyNow from "./components/pages/BuyNow";
import Edit from "./components/pages/Edit";
import AdminProducts from "./components/pages/AdminBundle";
import AdminArticles from "./components/pages/AdminArticles";

function App() {
  return (
    <Router>
      <Navbar style={{ zIndex: "1" }} />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/trend" exact component={Trend} />
        <Route path="/trend/:id" component={Article} />
        <Route path="/bundle" exact component={Bundle} />
        <Route path="/purchase" exact component={Purchase} />
        <Route path="/purchase/:id" component={DetailPurchase} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/paymentdetails" exact component={PaymentDetails} />
        <Route path="/paymentdetails/:id" exact component={BuyNow} />
        <Route path="/settings" exact component={Settings} />
        <Route path="/edit" exact component={Edit} />
        <Route path="/adminproducts" exact component={AdminProducts} />
        <Route path="/adminarticles" exact component={AdminArticles} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
