import { Link, Outlet, Route, Routes } from 'react-router'

import Home from "../components/Home"
import AboutMe from "../components/AboutMe";
import Portfolio from "../components/Portfolio";
import LocalStorage from "../components/LocalStorage";

import './App.css'
import Button from "@mui/material/Button"

function App() {

  return (
    <>
      <nav>
        <Button>
          <Link to="/">Home</Link>
        </Button>
        <Button>
          <Link to="/localStorage">Local Storage</Link>
        </Button>
        <Button>
          <Link to="/portfolio">Portfolio</Link>
        </Button>
        <Button>
          <Link to="/aboutMe">About Me</Link>
        </Button>
      </nav>
      <Outlet/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/localstorage" element={<LocalStorage/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/aboutMe" element={<AboutMe/>}/>
      </Routes>
    </>
  )
}

export default App
