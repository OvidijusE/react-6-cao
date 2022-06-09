import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Switch>
        <Route></Route>
      </Switch>
    </div>
  );
}

export default App;
