import React, { useEffect, createContext, useReducer, useContext } from 'react';
import NavBar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './components/screens/Home';
import SignIn from './components/screens/SignIn';
import SignUp from './components/screens/SignUp';
import MyResumes from './components/screens/MyResumes';
import EditResumes from './components/screens/editResumes';
import CreateResume from './components/screens/CreateResume';
import { reducer, initialState } from './reducers/userReducer'

export const UserContext = createContext()

const Routing = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))

    if (user) {
      dispatch({type:"USER",payload:user})
      navigate('/')
    } else {
      navigate('/signup')
    }
  }, [])

  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/signin' element={<SignIn />} />
      <Route exact path='/signup' element={<SignUp />} />
      <Route exact path='/editresume/:resumedid' element={<EditResumes />} />
      <Route exact path='/myresumes' element={<MyResumes />} />
      <Route exact path='/createresume' element={<CreateResume />} />
    </Routes>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <NavBar />
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>

  );
}

export default App;
