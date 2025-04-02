import { Dialog } from 'primereact/dialog';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
const API='http://localhost/backendrd/api/videos/get/videosporcanal.php?idcanal=';
const DetalleCanal = () => {  
    const params = useParams()
    const [datos, setDatos] = useState([])
    const [visible, setVisible] = useState(false); // Estado para controlar la visibilidad del Dialog
    const [selectedVideoCode, setSelectedVideoCode] = useState('');
    let URI=API+params.id
    const getDatos = async () =>{
        try {
          const response = await fetch(URI);
          const data = await response.json();
          console.log(data)
          setDatos(data);
        } catch (error) {
          console.error(error)
        }
      };
      useEffect(()=>{
        getDatos();
      },[params.id]);
      const openDialog = (codigo) => {
        setSelectedVideoCode(codigo);
        setVisible(true);
      };
      
      // Función para cerrar el Dialog
      const closeDialog = () => {
        setVisible(false);
      }
  return (
    <main className="main">
    {/* Page Title */}
    <div className="page-title position-relative">
        <div className="container d-lg-flex justify-content-between align-items-center">
            <h1 className="mb-2 mb-lg-0">{params.nombre}</h1>
            <nav className="breadcrumbs">
                <ol>
                    <li><a href="index.html">Home</a></li>
                    <li className="current">Categories</li>
                </ol>
            </nav>
        </div>
    </div>{/* End Page Title */}
    <div className="container">

                <section id="blog-posts" className="blog-posts section">
                    <div className="container">
                        <div className="row gy-4">
                        {datos && datos.map((item)=>(
                            <div key={item.id} className="col-lg-4">
                                <article className="position-relative h-100">
                                    <div className="post-img position-relative overflow-hidden">
                                    <a onClick={() => openDialog(item.codigo)}>
                                        <img src={`https://img.youtube.com/vi/${item.codigo}/hqdefault.jpg`} alt className="img-fluid" />
                                    </a>
                                        <span className="post-date">{item.fecha}</span>
                                    </div>
                                    <div className="post-content d-flex flex-column">
                                        <h3 className="post-title">{item.titulo}</h3>
                                        <div className="meta d-flex align-items-center">
                                            <div className="d-flex align-items-center">
                                                <i className="bi bi-person" /> 
                                                <a href={`https://www.youtube.com/${item.ruta}`} target="_blank" rel="noreferrer">
                                                    <span className="text-dark">Canal : {item.ruta}</span>
                                                </a>
                                            </div>
                                            <span className="px-3 text-black-50">/</span>
                                            
                                        </div>

                                    </div>
                                </article>
                            </div>
                           ))}
                        </div>
                    </div>
                </section>
               
               
            </div>
           
        <Dialog
            header="Reproductor de Video"
            visible={visible}
            onHide={closeDialog}
            style={{ width: '80vw', maxWidth: '1200px' }}
        >
            {/* Iframe de YouTube */}
            <iframe
            width="100%"
            height="600"
            src={`https://www.youtube.com/embed/${selectedVideoCode}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            ></iframe>
    </Dialog>
</main>

)
}

export default DetalleCanal