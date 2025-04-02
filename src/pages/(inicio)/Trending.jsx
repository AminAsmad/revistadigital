import React, {useEffect,useState } from 'react'
import { Dialog } from 'primereact/dialog';
const API = 'http://localhost/backendrd/api/videos/get/';
const API_CANALES = 'http://localhost/backendrd/api/canales/get/';
const Trending = ({c1,c2,c3,c4}) => {
const [datos, setDatos] = useState([]);
const [datosCaneles, setDatosCanales] = useState([]);
const [visible, setVisible] = useState(false); // Estado para controlar la visibilidad del Dialog
const [selectedVideoCode, setSelectedVideoCode] = useState(''); // Estado para almacenar el código del video seleccionado

const getDatos = async () => {
    try {
        const response = await fetch(API);
        const data = await response.json();
        //console.log(data);
        setDatos(data);
        //
        const response2 = await fetch(API_CANALES);
        const data2 = await response2.json();
        //console.log(data2);
        setDatosCanales(data2);
    } catch (error) {
        console.error(error);
    }
};

useEffect(() => {
    getDatos();
}, []);
 // Función para abrir el Dialog y establecer el código del video
 const openDialog = (codigo) => {
  setSelectedVideoCode(codigo);
  setVisible(true);
};
// Función para cerrar el Dialog
const closeDialog = () => {
  setVisible(false);
}

  return (
    <div>
  <section id="trending-category" className="trending-category section">
    <h1 className='text-center py-4'>Trending </h1>
    <div className="container" >
      <div className="container" >
        <div className="row g-5">
<div className="col-lg-4">
    
        {datos && datos.filter(item => item.idcanal === c1) // Filtra solo los videos con idcanal=1
               .slice(0, 2) // Limita a los primeros 3 videos
               .map((item,index) => (


          
            <div key={index} className="post-entry lg">
              <a onClick={() => openDialog(item.codigo)}>
              <img src={`https://img.youtube.com/vi/${item.codigo}/hqdefault.jpg`} alt className="img-fluid" />
                </a>
              <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
              <h2><a href="blog-details.html">{item.titulo}</a></h2>
              
              <div className="d-flex align-items-center author">
                <div className="photo"><img src={`https://yt3.googleusercontent.com/${item.icono}=s72-c-k-c0x00ffffff-no-rj`} /></div>
                <div className="name">
                  <h3 className="m-0 p-0">{item.fecha}</h3>
                </div>
              </div>
            </div>
          

               ))}
</div>

          <div className="col-lg-8">

            <div className="row g-5">
     <div className="col-lg-4 border-start custom-border">
            {datos && datos.filter(item => item.idcanal === c2) // Filtra solo los videos con idcanal=1
               .slice(0, 4) // Limita a los primeros 3 videos
               .map((item,index) => (

         
                <div key={index} className="post-entry">
                  
                  <a onClick={() => openDialog(item.codigo)}>
                  <img src={`https://img.youtube.com/vi/${item.codigo}/hqdefault.jpg`} alt className="img-fluid" />
                    </a>
                    
                  <div className="post-meta"><span className="date">Sport</span> <span className="mx-1">•</span> <span>{item.fecha}</span></div>
                  <h2><a href="blog-details.html">{item.titulo}</a></h2>
                </div>
            

               ))}
                 </div>
              <div className="col-lg-4 border-start custom-border">
              {datos && datos.filter(item => item.idcanal === c3) // Filtra solo los videos con idcanal=1
               .slice(0, 4) // Limita a los primeros 3 videos
               .map((item,index) => (
                <div key={index} className="post-entry">
                  <a onClick={() => openDialog(item.codigo)}>
                  <img src={`https://img.youtube.com/vi/${item.codigo}/hqdefault.jpg`} alt className="img-fluid" /> 
                  </a>
                  <div className="post-meta"><span className="date">{item.nombre}</span> <span className="mx-1">•</span> <span>{item.fecha}</span></div>
                  <h2><a href="blog-details.html">{item.titulo}</a></h2>
                </div>
                
               ))}
              </div>
              {/* Trending Section */}

              <div className="col-lg-4">
              
                <div className="trending">
                  <h3>Trending</h3>
                  
                  <ul className="trending-post">
                  {datos && datos.filter(item => item.idcanal === c4) // Filtra solo los videos con idcanal=1
               .slice(0, 4) // Limita a los primeros 3 videos
               .map((item,index) => (
                    <li key={index}>
                      <a onClick={() => openDialog(item.codigo)}>
                        <span className="number">{index+1}</span>
                        <h3>{item.titulo}</h3>
                        <span className="author">{item.nombre}</span>
                      </a>
                    </li>
    ))}
                    
                   
                  </ul>
                </div>
           
              </div> {/* End Trending Section */}
              
            </div>

          </div>
        </div> {/* End .row */}
      </div>
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
  </section>{/* /Trending Category Section */}
</div>

  )
}

export default Trending