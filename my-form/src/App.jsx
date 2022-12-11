import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/Home';
import Form from './components/Form';
import AboutMe from './components/AboutMe';
import Error from "./components/Error"
import Menu from './Menu/Menu';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Menu />
      <hr />
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/form' element={<Form />}/>
          <Route path='aboutme' element={<AboutMe/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
