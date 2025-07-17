import { Navbar, Footer } from './components/components.js'
import { Home, About, Clients, Contact, Projects, Services, News } from './pages/pages.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/clients" element={<Clients />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/news" element={<News />} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App
