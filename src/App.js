import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Profile from './components/Profile';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <BrowserRouter>
          <Route path="/" component={Home} exact/>
          <Route path="/profile" component={Profile} />
          <Route path="/project" component={Project} />
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
