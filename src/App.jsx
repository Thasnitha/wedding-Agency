import { Route, Routes } from 'react-router-dom'
import './App.css'
import Mainpage from './pages/Mainpage'
import Services from './pages/Services'
import Couples from './pages/Couples'
import Contact from './pages/Contact'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
    {/* Header */}
    <Header/>

    <Routes>

      <Route path='/'element={<Mainpage/>}></Route>
      <Route path='/about'element={<About/>}></Route>
      <Route path='/couples'element={<Couples/>}></Route>
      <Route path='/services'element={<Services/>}></Route>
      <Route path='/contacts'element={<Contact/>}></Route>

    </Routes>
    {/* Footer */}
    <Footer/>

    </>
  )
}

export default App
