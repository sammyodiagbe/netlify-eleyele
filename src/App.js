import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/home";
import "./styles/base.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
