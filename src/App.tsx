import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { SplashScreen } from './components/SplashScreen';
import { FloresPage } from './pages/FloresPage';
export default function App() {
  return <ThemeProvider><BrowserRouter><SplashScreen /><div id="app-content"><ScrollProgressBar /><Routes>
    <Route path="/" element={<FloresPage />} />
    <Route path="/index.html" element={<FloresPage />} />
    <Route path="/flexqr-flores/*" element={<FloresPage />} />
    <Route path="*" element={<div className="boutique-not-found"><h1>Este camino aún no florece.</h1><p>Encuentra un detalle en Flores & Boutique.</p><a href="/flexqr-flores" className="primary-button">Volver a los ramos</a></div>} />
  </Routes></div></BrowserRouter></ThemeProvider>;
}
