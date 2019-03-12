import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LaunchPage from './components/LaunchPage';
import Login from './components/Login';

const RouterComponent = () => {
  return (
    <Router showNavigationBar={false}>
      <Scene key="root">
        <Scene key="launchPage" component={LaunchPage} title="MyCocinero" hideNavBar initial />
        <Scene key="login" component={Login} title="Signin" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
