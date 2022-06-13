import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.css';
import NavigationStyled from './components/NavigationStyled/NavigationStyled';
import AddPageStyled from './pages/AddPageStyled/AddPageStyled';
import HomePageStyled from './pages/HomePageStyled/HomePageStyled';

function App() {
  return (
    <div className='App'>
      <NavigationStyled />
      <Switch>
        <Route path='/add'>
          <AddPageStyled />
        </Route>
        <Route path='/'>
          <HomePageStyled />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
