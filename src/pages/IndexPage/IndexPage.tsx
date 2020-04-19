import React from 'react';
import { Link } from 'react-router-dom';

const IndexPage = () => (
  <div className="IndexPage">
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
  </div>
);

export default IndexPage;
