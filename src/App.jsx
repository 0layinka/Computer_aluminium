import 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Appointment from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact_us from './components/Contact_us'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <div className="bg-[url('/image.jpg')] bg-fixed bg-cover bg-center h-screen text-white">
      <Header/>
      <Hero />
    </div>
    <Appointment />
    <About />
    <Portfolio />
    <Contact_us />
    <div className="bg-[url('/footer.JPG')] bg-fixed bg-cover bg-center text-white">
      <Footer />
    </div>
    </>
  )
}

export default App
