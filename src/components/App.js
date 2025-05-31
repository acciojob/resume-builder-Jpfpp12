// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

// Import your page components
import ProfilePage from './pages/Profile';
import EducationPage from './pages/Education';
import SkillsPage from './pages/Skills';
import ProjectsPage from './pages/Projects';
import SocialMediaPage from './pages/Social Media';
import FinalResumePage from './pages/Final Resume';

function App() {
  return (
    <Provider store={store}>
      {/* Do not remove the main div */}
      <Router>
        <Switch>
          {/* Redirect root to /profile */}
          <Route exact path="/">
            <Redirect to="/profile" />
          </Route>

          <Route path="/profile" component={ProfilePage} />
          <Route path="/education" component={EducationPage} />
          <Route path="/skills" component={SkillsPage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/social" component={SocialMediaPage} />
          <Route path="/resume" component={FinalResumePage} />

          {/* Optional: Catch-all route for 404 */}
          <Route path="*">
            <div>Page Not Found</div>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
