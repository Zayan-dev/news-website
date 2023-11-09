// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";


import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {
  pageSize=20;
  render() {
    
    return (
      <div>
        <BrowserRouter >
      <Navbar/>
      {/* <News category="general"/> */}
      <Routes>
      <Route  exact path='/' element={<News key="/" category="general" pageSize={this.pageSize}/>} />
      <Route  exact path='/general' element={<News key="/general" category="general" pageSize={this.pageSize}/>} />
      <Route  exact path='/business' element={<News key="business" category="business" pageSize={this.pageSize}/>} />
      <Route  exact path='/entertainment' element={<News key="entertainment" category="entertainment" pageSize={this.pageSize}/>} />
      <Route  exact path='/health' element={<News key="health" category="health" pageSize={this.pageSize}/>} />
      <Route  exact path='/science' element={<News key="science" category="science" pageSize={this.pageSize}/>} />
      <Route  exact path='/technology' element={<News key="technology" category="technology" pageSize={this.pageSize}/>} />
      <Route  exact path='/sports' element={<News key="sports" category="sports" pageSize={this.pageSize}/>} />
      </Routes>
      </BrowserRouter>
      </div>
    )
  }
}