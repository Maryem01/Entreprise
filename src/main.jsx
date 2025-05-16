import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes, HashRouter} from 'react-router';
import Home from './Page/Home/Home.jsx';
import AboutUs from './Page/About/AboutUs.jsx';
import ServicePage from "./Page/Service/ServicePage.jsx";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="service" element={<ServicePage />} />
      </Route>
    </Routes>
  </HashRouter>
);
