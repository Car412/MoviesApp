import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';
import Results from './components/Results';
import FilteredMovies from './components/FilteredMovies';

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/detail" component={Detail} />
      <Route exact path="/results" component={Results} />
      <Route exact path="/filtered" component={FilteredMovies} />
    </Switch>
    </>
  );
}

export default App;
