import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import Ourservices from './pages/ourservice'
import Testimonials from './pages/testimonials'
import Contactus from './pages/contactus'


function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/ourservices" element={<Ourservices />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
