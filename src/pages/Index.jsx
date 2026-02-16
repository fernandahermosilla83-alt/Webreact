import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <main style={{minHeight:"100vh",textAlign:"center",marginTop:80}}>
      <h1>Proyecto React listo 🚀</h1>
      <p>Este proyecto ya está preparado para GitHub.</p>
      <Link to="/guia/demo">Ir a guía demo</Link>
      <Footer />
    </main>
  );
};

export default Index;
