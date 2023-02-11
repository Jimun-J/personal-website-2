import './App.scss'
import { Navbar, Footer } from './components'
import { Header, About, Work, Skills, Contact } from './container'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
