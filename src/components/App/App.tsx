import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import IndexPage from 'pages/IndexPage/IndexPage';
import CountdownTimerPage from 'pages/CountdownTimerPage/CountdownTimerPage';
import StreamTimerPage from 'pages/StreamTimerPage/StreamTimerPage';
import LastfmRecentSongPage from 'pages/LastfmRecentSongPage/LastfmRecentSongPage';
import SocialMediaWidgetPage from 'pages/SocialMediaWidgetPage/SocialMediaWidgetPage';

const App = () => (
  <Router>
    <Switch>
      <Route path="/countdowntimer">
        <CountdownTimerPage />
      </Route>
      <Route path="/streamtimer">
        <StreamTimerPage />
      </Route>
      <Route path="/socialmediawidget">
        <SocialMediaWidgetPage />
      </Route>
      <Route path="/lastfmrecentsong">
        <LastfmRecentSongPage />
      </Route>
      <Route path="/">
        <IndexPage />
      </Route>
    </Switch>
  </Router>
);

export default App;
