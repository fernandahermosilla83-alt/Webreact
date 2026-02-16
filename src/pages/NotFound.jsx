import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{textAlign:"center",marginTop:80}}>
      <h1>404</h1>
      <p>Página no encontrada</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};

export default NotFound;
