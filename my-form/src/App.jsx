import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home';
import NewForm from './components/NewForm/NewForm';
import AboutMe from './components/AboutMe';
import Error from "./components/Error"
import Menu from './Menu/Menu';

function App() {
  return (
    <div className="App" id='element'>

      <BrowserRouter>
        <Menu />
        {/* <hr /> */}
        <br />
        <Routes>
          <Route>
            <Route index element={<Home />} />
            <Route path='/newform' element={<NewForm />} />
            <Route path='aboutme' element={<AboutMe />} />
          </Route>
            <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
