import React from 'react';

import SearchForm from './components/SearchForm';
import Results from './components/Results';
import VideoPage from './components/VideoPage';

import { Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <img className="youtube-logo" src="https://image.businessinsider.com/59a59a8d79bbfd1d008b601a?width=1200&format=jpeg" alt="Youtube Logo" />

      <Route path="/" component={SearchForm} />
      <Results />

      <Route exact path="/:id" component={VideoPage} />
    </div>
  );
}

export default App;
