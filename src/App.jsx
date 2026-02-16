import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GuideDetail from "./pages/GuideDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        {/* Esta es la página principal con Hero, Catálogo y FAQ */}
        <Route path="/" element={<Index />} />
        
        {/* Esta es la página de detalle para cada guía */}
        <Route path="/guia/:id" element={<GuideDetail />} />
        
        {/* Página de error 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

