import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from "./components/Header/Header.jsx"
import Home from "./pages/Home/Home.jsx"
import Contact from "./pages/Contact/Contact.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Shop from "./pages/Shop/Shop.jsx"


function App() {

  return (
    <section className="container">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
      <Footer />
    </section>
  )
}

export default App
