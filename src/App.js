import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import CountryDetail from './components/CountryDetail/CountryDetail';


function App() {
  
  return (
   <Router>
     <Switch>
       <Route path="/home">
          <Home/>
       </Route>
       <Route exact path="/">
          <Home/>
       </Route>
       <Route  path="/country/:crName">
          <CountryDetail/>
       </Route>
       <Route path="*">
          <NoMatch/>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;


