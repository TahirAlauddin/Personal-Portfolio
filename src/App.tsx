import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import LandingPage from "./screens/landing";
import PortfolioDetailPage from "./screens/portfolio";

function App() {
  return (
    <>
      {/* <LandingPage /> */}
      <PortfolioDetailPage />
    </>
  );
}

export default App
