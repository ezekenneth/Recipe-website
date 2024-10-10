import { useState } from 'react'
import './App.css'
import { BrowserRouter , Routes , Route } from "react-router-dom"
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import ForgotPassword from './pages/Forgotpassword'
import ResetPassword from './pages/Resetpassword'
import Signup from './pages/Signup'
import Singleproduct from './pages/Singleproduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>

             <Route index element={<Home />}/>

             <Route path='Login' element={<Login />}/>
             <Route path='forgot-password' element={<ForgotPassword />}/>
             <Route path='reset-password' element={<ResetPassword />}/>
             <Route path='signup' element={<Signup />}/>
             <Route path='product' element={<Singleproduct />}/>


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
