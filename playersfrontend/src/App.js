import "./App.css";
import ListPlayersComponent from "./components/ListPlayersComponent";
import HeaderComponent from "./components/HeaderComponents";
import FooterComponent from "./components/FooterComponet";
import CreatePlayerComponent from "./components/CreatePlayerComponent";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import UpdatePlayerComponent from "./components/UpdatePlayerComponent";
import ViewPlayerComponent from "./components/ViewPlayerComponent";
function App() {
  //
  return (
    <div>
      <Router>
       
        <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path="/" exact component={ListPlayersComponent}></Route>
              <Route path="/players" component={ListPlayersComponent}></Route>
              <Route path="/add-player/:id" component={CreatePlayerComponent}></Route>
              <Route path="/view-player/:id" component={ViewPlayerComponent}></Route>
              {/* <Route path="/update-player/:id" component={UpdatePlayerComponent}></Route> */}
              
              <ListPlayersComponent/>
              
              </Switch>
          </div>
          <FooterComponent />
       
      </Router>
    </div>
  );
}

export default App;
