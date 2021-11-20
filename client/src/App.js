import React from 'react';
import NavBar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/screens/Home';
import SignIn from './components/screens/SignIn';
import SignUp from './components/screens/SignUp';
import MyResumes from './components/screens/MyResumes';
import EditResumes from './components/screens/editResumes';
import CreateResume from './components/screens/CreateResume';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/signin' element={<SignIn />}/>
        <Route exact path='/signup' element={<SignUp />}/>
        <Route exact path='/editresume' element={<EditResumes />}/>
        <Route exact path='/myresumes' element={<MyResumes />}/>
        <Route exact path='/createresume' element={<CreateResume />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
