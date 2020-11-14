import React from 'react';
import AppRouter from './components/router/router';
import firebase from './components/firebase/firebase'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div>
      <AppRouter/>
    </div>
  );
}

export default App; 