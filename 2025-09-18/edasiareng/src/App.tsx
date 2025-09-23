import {Route, Routes } from 'react-router'

import Home from "../components/Home"
import AboutMe from "../components/AboutMe";
import Portfolio from "../components/Portfolio";
import LocalStorage from "../components/LocalStorage";
import Layout from "../components/Layout"

import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="localStorage" element={<LocalStorage />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="aboutMe" element={<AboutMe />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
