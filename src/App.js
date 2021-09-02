import React from 'react';
import styled  from 'styled-components';
import Menu from './components/menu/Menu';
import Insert from './components/insert/Insert';
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
    <Menu />
    <Insert />
    </AppContainer>
  );
}

export default App;
