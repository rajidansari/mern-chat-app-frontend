import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ChatPage from './pages/ChatPage'
import SignupPage from './pages/SignupPage'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return (
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/signup' element={<SignupPage />} />
    <Route path='/chat' element={<ProtectedRoute> <ChatPage /> </ProtectedRoute>} />
    </Routes>
  )
}

export default App