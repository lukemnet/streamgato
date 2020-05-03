import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import WidgetConfigPage from 'components/WidgetConfigPage/WidgetConfigPage';
import IndexPage from 'components/IndexPage/IndexPage';
import WidgetPage from 'components/WidgetPage/WidgetPage';
import Error404 from 'components/Error404/Error404';
import getWidgetArray from 'helpers/getWidgetArray/getWidgetArray';

const App = () => (
  <Router>
    <Switch>
      <Route
        exact
        path='/'
      >
        <IndexPage />
      </Route>
      {getWidgetArray(widget => (
        <Route
          exact
          path={widget.route}
          key={widget.alias}
        >
          <WidgetConfigPage widget={widget} />
        </Route>
      ))}
      {getWidgetArray(widget => (
        <Route
          path={`/${widget.alias}`}
          key={widget.alias}
        >
          <WidgetPage
            alias={widget.alias}
            configRoute={widget.route}
          />
        </Route>
      ))}
      <Route component={Error404} />
    </Switch>
  </Router>
);

export default App;
