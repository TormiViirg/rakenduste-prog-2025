import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import PropDrilling from "../components/PropDrilling.jsx";
import Context from "../components/Context.jsx";
import Cats from '../components/Cats.tsx';
import SubmitCat from '../components/SubmitCat.tsx';


const fetchCats = async () => {
  try {
    const res = await fetch("http://localhost:3000/cats");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Cats />} />
      <Route path="/cats" element={<SubmitCat fetchCats={fetchCats} />} />
      <Route path="/drilling" element={<PropDrilling />} />
      <Route path="/context" element={<Context />} />
    </Routes>
  </BrowserRouter>,
);
