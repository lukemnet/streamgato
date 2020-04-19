import React from 'react';
import { Link } from 'react-router-dom';
import GenericPage from 'components/GenericPage/GenericPage';

const IndexPage = () => (
  <GenericPage className="IndexPage">
    <h1>IndexPage</h1>
    <ul>
      <li>
        <Link to="/countdowntimer">
          Countdown Timer
        </Link>
      </li>
      <li>
        <Link to="/streamtimer">
          Stream Timer
        </Link>
      </li>
      <li>
        <Link to="/socialmediawidget">
          Social Media Widget
        </Link>
      </li>
      <li>
        <Link to="/lastfmrecentsong">
          Last.fm Recent Song
        </Link>
      </li>
    </ul>
  </GenericPage>
);

export default IndexPage;
