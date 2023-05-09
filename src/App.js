
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

import { Route, Routes  } from "react-router-dom";
//46b40c41be6f4c4591ffc23638e378df
export default class App extends Component {
  render() {
    return (
      <>
         <NavBar/>
         <Routes>
            <Route  exact path ="/" element ={<News key="Home" category="Home"/>}/>
            <Route  exact path ="/About" element ={<News key="About" category="About"/>}/>
            <Route  exact path ="/Business" element ={<News key="Business" category="Business"/>}/>
            <Route  exact path ="/Entertainment" element ={<News key="Entertainment" category="Entertainment"/>}/>
            <Route  exact path ="/Science" element ={<News key="Science" category="Science"/>}/>
            <Route  exact path ="/Sports" element ={<News key="sports" category="sports"/>}/>
            <Route  exact path ="/Technology" element ={<News key="Technology" category="Technology"/>}/>
            <Route  exact path ="/General" element ={<News key="General" category="General"/>}/>
          </Routes>
      </>
    )
  }
}

