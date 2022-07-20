import "./App.css";
import "boxicons/css/boxicons.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Blank from "./pages/Blank";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Blank />} />
          <Route path="/catalogue" element={<Blank />} />
          <Route path="/leaders" element={<Blank />} />
          <Route path="/users" element={<Blank />} />
          <Route path="/my_company" element={<Blank />} />
          <Route path="/courses" element={<Blank />} />
          <Route path="/rewards" element={<Blank />} />
          <Route path="/events" element={<Blank />} />
          <Route path="/notifications" element={<Blank />} />
          <Route path="/reports" element={<Blank />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
