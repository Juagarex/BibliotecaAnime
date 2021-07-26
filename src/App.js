import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import {Navbar,FormAnime, Login} from './components'
import Home from './Pages/Home/Home';
import { GlobalStyle } from './Globalstyles';



function App() {
  return (
  <Router>
  <GlobalStyle/>
  <Navbar/>
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path="/FormAnime" component={FormAnime}/>
      <Route exact path="/Home" component={Home}/>
    </Switch>
  </Router>
  );
}

export default App;
