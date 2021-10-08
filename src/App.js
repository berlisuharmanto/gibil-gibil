import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Trend from "./components/pages/Trend";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/trend" exact component={Trend} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
