import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import WidgetPage from 'components/WidgetPage/WidgetPage';
import IndexPage from 'components/IndexPage/IndexPage';
import { widgets } from 'config/config';

const App = () => {
  console.log(widgets);
  return (
    <Router>
      <Switch>
        {widgets.map((widget, key) => (
          <Route key={key} path={widget.route}>
            <WidgetPage widget={widget} />
          </Route>
        ))}
        <Route path="/">
          <IndexPage widgets={widgets} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
