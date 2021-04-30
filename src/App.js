import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Header from './components/Header'
import Welcometext from './components/WelcomeText'
import Todo_area from './components/Todo_area'
import {DataContext} from './components/DataContext'

function App() {
  return (
    <div className="App">
      <DataContext>
        <NavBar/>
        <Header/>
        <Welcometext/>
        <Todo_area/>
        <Footer/>
      </DataContext>
    </div>
  );
}

export default App;
