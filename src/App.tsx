import React, { FunctionComponent } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Header from '../src/components/Header'
import Home from '../src/pages/Home'
import Room from '../src/pages/Room'

import Box from '@material-ui/core/Box'


const App:FunctionComponent<{}> = () => {
  return (
    <Box alignItems="center">
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/room' component={Room}/>
        </Switch>
      </Router>
    </Box>
  );
}

export default App;
