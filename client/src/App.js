import React, { useEffect, createContext, useReducer, useContext } from 'react';
import NavBar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes, useNavigate, useLocation } from 'react-router-dom'
import Home from './components/screens/Home';
import SignIn from './components/screens/SignIn';
import SignUp from './components/screens/SignUp';
import MyResumes from './components/screens/MyResumes';
import EditResumes from './components/screens/editResumes';
import CreateResume from './components/screens/CreateResume';
import Reset from './components/screens/Reset'
import PrintResume from './components/screens/PrintResume';
import { reducer, initialState } from './reducers/userReducer'
import './App.css'

export const UserContext = createContext()

const Routing = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext)
  const location = useLocation();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))

    if (user) {
      dispatch({ type: "USER", payload: user })
      navigate('/')
    } else {
      if (!location.pathname.startsWith('/resetpassword')) {
        navigate('/signup')
      }
    }
  }, [])

  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/signin' element={<SignIn />} />
      <Route exact path='/signup' element={<SignUp />} />
      <Route exact path='/editresume' element={<EditResumes />} />
      <Route exact path='/myresumes' element={<MyResumes />} />
      <Route exact path='/createresume' element={<CreateResume />} />
      <Route exact path='/printresume' element={<PrintResume />} />
      <Route exact path='/resetpassword' element={<Reset />} />
    </Routes>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter className="bg">
        <NavBar />
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>

  );
}

export default App;
