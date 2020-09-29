import React, { Component } from 'react';
import './app.scss';
import TutorialHeader from './components/TutorialHeader';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import { Route, Switch } from 'react-router-dom';
import { Content } from 'carbon-components-react';

class App extends Component {
  render() {
    return (
      <div>
        <TutorialHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
        </Content>
      </div>
    );
  }
}

export default App;
