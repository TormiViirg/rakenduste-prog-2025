import { BrowserRouter, Route, Routes } from "react-router-dom";
import ToDos from "../components/ToDos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToDos />} />
        <Route path="/todos" element={<ToDos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
