import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dummy from "./pages/DummyPage/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dummypage" element={<Dummy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
