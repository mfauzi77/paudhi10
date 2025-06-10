import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NewSlider from "./components/NewSlider";
import AboutPAUD from "./components/AboutPAUD";
import Footer from "./components/Footer";
import KLPage from "./pages/KLPage";
import PAUDStats from "./components/PAUDStats";
import Bidang from "./components/Bidang";
import AboutPAUD2 from "./components/AboutPAUD2";
import TaraChart from "./components/TaraCharts";
import TaraTable from "./components/TaraTable";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white"> {/* Pastel background */}
        <Header />
        <div className="flex-grow">
          <Routes>
            {/* Halaman Beranda */}
            <Route
              path="/"
              element={
                <div className="backdrop-blur-md p-4 rounded-xl m-4 bg-white">
                  <AboutPAUD />
                  <AboutPAUD2 />
                  <Bidang />
                  <PAUDStats />
                  <NewSlider />
                </div>
              }
            />

            {/* Halaman Data */}
            <Route path="/data" element={<TaraChart />} />
            {/* Halaman K/L */}
            <Route path="/kl" element={<KLPage />} />
            <Route path="/tara-table" element={<TaraTable />} />
            <Route path="/tara-chart" element={<TaraChart />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
