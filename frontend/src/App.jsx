import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Update from "./pages/Update";

function App() {

  return (
    <div className="h-screen flex items-center justify-center text-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/add" element={<Add/>} />
          <Route path="/update/:id" element={<Update/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
