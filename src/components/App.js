// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

// Import your page components
import Profile from './pages/Profile';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import SocialMedia from './pages/SocialMedia';
import FinalResume from './pages/Final Resume';

function App() {
  return (
    <Provider store={store}>
      {/* Do not remove the main div */}
      <Router>
        <div>
          <h1>RESUME GENERATOR</h1>
          <Switch>
            {/* Redirect root to /profile */}
            <Route exact path="/">
              <Redirect to="/profile" />
            </Route>

            <Route path="/profile" component={Profile} />
            <Route path="/education" component={Education} />
            <Route path="/skills" component={Skills} />
            <Route path="/projects" component={Projects} />
            <Route path="/social" component={SocialMedia} />
            <Route path="/resume" component={FinalResume} />

            {/* Optional: Catch-all route for 404 */}
            <Route path="*">
              <div>Page Not Found</div>
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
