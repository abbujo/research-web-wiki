import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Data from "./pages/data";
import Navbar from "./components/navbar";
import "antd/dist/antd.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/data/:id" component={Data} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
