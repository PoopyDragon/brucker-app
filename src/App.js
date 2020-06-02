import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import FAQ from './components/pages/FAQ';
import Contact from './components/pages/contact';
import Meettheteam from './components/pages/meetTheTeam'

//includes
import "./Assets/css/default.min.css";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <Router>
    <div className="App">

      <Header />

      <Route exact path='/' component={Homepage} />
      <Route exact path='/faq' component={FAQ} />
      <Route exact path='/meet-the-team' component={Meettheteam} />
      <Route exact path='/contact' component={Contact} />
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
