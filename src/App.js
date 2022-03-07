import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Login from './Login';
import Blog from './Blog';
import Dashboard from './Dashboard';
import Post1 from './blog/Post1'
import Post2 from './blog/Post2'
import Post3 from './blog/Post3'
import Post4 from './blog/Post4'
import Post5 from './blog/Post5'
import Post6 from './blog/Post6'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';


function App() {
  const [{user}, dispatch] = useStateValue();
  
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      }
      else{
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    })
  },[])

  return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/register">
              <Login/>
            </Route>
            <Route path="/blog/post1">
              <Header bgColor="#AAB5B5" position="relative" />
              <Post1 />
              <Footer />
            </Route>
            <Route path="/blog/post2">
              <Header bgColor="#AAB5B5" position="relative" />
              <Post2 />
              <Footer />
            </Route>
            <Route path="/blog/post3">
              <Header bgColor="#AAB5B5" position="relative" />
              <Post3 />
              <Footer />
            </Route>
            <Route path="/blog/post4">
              <Header bgColor="#AAB5B5" position="relative" />
              <Post4 />
              <Footer />
            </Route>
            <Route path="/blog/post5">
              <Header bgColor="#AAB5B5" position="relative" />
              <Post5 />
              <Footer />
            </Route>
            <Route path="/blog/post6">
              <Header bgColor="#AAB5B5" position="relative" />
              <Post6 />
              <Footer />
            </Route>
            <Route path="/blog">
              <Header bgColor="#f7f7f7" position="relative"/>
              <Blog/>
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/">
              <Header bgColor="transparent" position="absolute" />
              <Home/>
              <Footer/>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
