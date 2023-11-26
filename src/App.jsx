import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NowPlayingPage from "./pages/NowPlayingPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nowplaying" element={<NowPlayingPage />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
};

export default App;
