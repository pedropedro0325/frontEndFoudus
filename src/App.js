import React from 'react';
import styled  from 'styled-components';
import Menu from './components/menu/Menu';
import Insert from './components/insert/Insert';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Affichage from './components/affichage/Affichage';
const AppContainer= styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
`;
 function App() {
  return (
    <AppContainer>
    <Router>
    <Switch>
    <Route path="/" exact component={Menu}/>
    <Route path="/affichage" component={Affichage}/>
    <Route path="/insertion" component={Insert}/>
    </Switch>
    </Router>
    </AppContainer>
  );
}

export default App;
