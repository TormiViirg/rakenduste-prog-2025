import { BrowserRouter, Route, Routes } from "react-router-dom";
import ToDos from "../components/ToDos";
import AdminTools from "../components/AdminTools"

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminTools />} />
        <Route path="/todos" element={<ToDos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
