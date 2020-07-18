import React from 'react';
import './App.css';
import Home from './components/Home/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Contacts from './components/Contact/Contact'
import NewPost from './components/Newpost/NewPost'
import DisplaySinglePost from './components/Showsinglepost/DisplaySinglePost'
import Search from './components/Search/Search'
import { Switch, Route, withRouter } from 'react-router-dom'


class App extends React.Component {

  render() {
    return (
      <div className='main-container'>
        <div className="parallax"><Header /></div>
        <Switch>
          <Route path={'/search'} component={withRouter(Search)} />
          <Route path={'/posts/:postId'} component={withRouter(DisplaySinglePost)} />
          <Route path={'/make-post'} component={NewPost} />
          <Route path={'/contact'} component={Contacts} />
          <Route exact path={'/'} component={Home} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;