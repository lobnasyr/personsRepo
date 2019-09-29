// in this file I will define all routers that user can visit
import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import AddPerson from './components/AddPerson';
import PersonsList from './components/PersonsList'



const RouterComponent = () => {

  return(
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="main">
          <Scene key="PersonsList" component={PersonsList} initial title={'Persons List'}/>
          <Scene key="AddPerson" component={AddPerson}  title={'Add Person'}/>
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
