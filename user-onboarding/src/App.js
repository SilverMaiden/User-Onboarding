import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormikUserForm from "./components/Form/Form";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
    <Nav />
    <FormikUserForm />
    </div>
  );
}

export default App;
