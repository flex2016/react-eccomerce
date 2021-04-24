import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from "./pages/homepage/homepage.component"

const App = () => {

  return (
    <div className="App">
    <Switch>
        <Route exact path='/' component={HomePage} />

      </Switch>
    </div>
  );
}

export default App;
