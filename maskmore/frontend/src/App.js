import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Suggestion from './components/Suggestion';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/suggestion' exact component={Suggestion} />
        <Redirect from='*' to='/' />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
