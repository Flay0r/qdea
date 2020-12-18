import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Start from './pages/Start';
import './styles/base.css';



class App extends React.Component {
  
  render(){
    return (
      <Router>
        <Switch>
        <Route exact path="/" component={Start}></Route>
        </Switch>
      </Router>
    );
  };  
}
export default App;



