import {Routes,Route,Link,BrowserRouter } from 'react-router-dom'
import Homepage from './Components/Homepage'
import Aboutpage from './Components/Aboutpage'
import Contactpage from './Components/Contactpage'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">about</Link>
      <Link to="/contact">Contact</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Homepage></Homepage>}/>
      <Route path="/about" element={<Aboutpage></Aboutpage>}/>
      <Route path="/contact" element={<Contactpage></Contactpage>}/>
      

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App