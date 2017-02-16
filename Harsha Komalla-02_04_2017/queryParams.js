import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

const Page = (props) =>
  <div><h1>{props.location.query.message || 'Welcome to ReactJS'}</h1><Links /></div>

const Links = () =>
  <nav>
    <Link to={ {pathname: '/', query: {message: 'link'}} }>link</Link>
  </nav>

class App extends React.Component {
  render(){
    return (
      <Router history={ browserHistory }>
        <Route path="/" component={Page}></Route>
      </Router>
    )
  }
}

export default App;