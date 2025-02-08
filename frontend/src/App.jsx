import {Navigate, Route, Routes} from 'react-router-dom'
import './App.css'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Home from './pages/home/Home'
import Land from './pages/land/Land'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'
import Account from './pages/account/Account'

function App() {
  const {authUser} = useAuthContext();


  return <div className='h-screen flex item-center justify-center'>
    <Routes>
      <Route path="/" element={<Land/>}/>
      <Route path='/home' element={authUser ? <Home/> : <Navigate to={"/login"}/>} />
      <Route path='/login' element={authUser ? <Navigate to="/home"/> : <Login/>} />
      <Route path='/signup' element={authUser ? <Navigate to="/home"/> : <SignUp/>} />
      <Route path='/account' element={authUser ? <Account/> : <Navigate to="/login"/>} />
    </Routes>
    <Toaster/>
  </div>
}

export default App
