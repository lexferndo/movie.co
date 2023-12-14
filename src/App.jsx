import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NowPlayingPage from "./pages/NowPlayingPage";
import Footer from "./components/Footer";
import DetailPage from "./pages/DetailPage";
import ScrollToTop from "./components/ScrollToTop";
import UpComing from "./pages/UpComing";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import SearchPage from "./pages/SearchPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upcoming" element={<UpComing />} />
          <Route path="/nowplaying" element={<NowPlayingPage />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/toprated" element={<TopRated />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/search/:keyword" element={<SearchPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
