import { useParams, Link } from "react-router-dom";

const GuideDetail = () => {
  const { id } = useParams();

  return (
    <div style={{textAlign:"center",marginTop:80}}>
      <h1>Detalle guía: {id}</h1>
      <Link to="/">Volver</Link>
    </div>
  );
};

export default GuideDetail;
