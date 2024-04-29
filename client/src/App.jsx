import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Mindspace from './pages/Mindspace'
import Header from './components/header'
import Footer from './components/footer'

export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/sign-in" element={<Signin />}/>
      <Route path="/sign-up" element={<Signup />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/mindSpace" element={<Mindspace />}/>
    </Routes>
   <Footer />
    </BrowserRouter>
  );
}
