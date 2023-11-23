import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NowPlayingPage from "./pages/NowPlayingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nowplaying" element={<NowPlayingPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
