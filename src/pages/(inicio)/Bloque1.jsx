import { Dialog } from 'primereact/dialog';
import React, { useEffect, useState } from 'react'
const API = 'http://localhost/backendrd/api/videos/get/';
const API_CANALES = 'http://localhost/backendrd/api/canales/get/';



const Bloque1 = ({ c5, c6, c7, c8 }) => {
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
      {/* Culture Category Section */}
      <section id="culture-category" className="culture-category section">
        {/* Section Title */}
        <div className="container section-title">
          <div className="section-title-container d-flex align-items-center justify-content-between">
            <h2>Culture</h2>
            <p><a href="categories.html">See All Culture</a></p>
          </div>
        </div>{/* End Section Title */}
        <div className="container">
          <div className="row">
            <div className="col-lg-3">

              {datos && datos.filter(item => item.idcanal === c5) // Filtra solo los videos con idcanal=1
                .slice(0, 2) // Limita a los primeros 3 videos
                .map((item, index) => (



                  <div key={index} className="post-entry lg">
                    <a onClick={() => openDialog(item.codigo)}>
                      <img src={`https://img.youtube.com/vi/${item.codigo}/hqdefault.jpg`} alt className="img-fluid" />
                    </a>
                    <div className="post-meta"><span className="date">{item.nombre}</span> <span className="mx-1">•</span> <span>{item.fecha}</span></div>
                    <h2><a href="blog-details.html">{item.titulo}</a></h2>

                    <div className="d-flex align-items-center author">
                      <div className="photo"><img src={`https://yt3.googleusercontent.com/ytc/${item.icono}=s72-c-k-c0x00ffffff-no-rj`} /></div>
                      <div className="name">
                        <h3 className="m-0 p-0">{item.fecha}</h3>
                      </div>
                    </div>
                  </div>


                ))}
            </div>
            <div className="col-lg-3">

              {datos && datos.filter(item => item.idcanal === c6) // Filtra solo los videos con idcanal=1
                .slice(0, 2) // Limita a los primeros 3 videos
                .map((item, index) => (



                  <div key={index} className="post-entry lg">
                    <a onClick={() => openDialog(item.codigo)}>
                      <img src={`https://img.youtube.com/vi/${item.codigo}/hqdefault.jpg`} alt className="img-fluid" />
                    </a>
                    <div className="post-meta"><span className="date">{item.nombre}</span> <span className="mx-1">•</span> <span>{item.fecha}</span></div>
                    <h2><a href="blog-details.html">{item.titulo}</a></h2>

                    <div className="d-flex align-items-center author">
                      <div className="photo"><img src="https://yt3.googleusercontent.com/ytc/AIdro_lK7aFEwmPUPERCCXEyYbJ9F7X5ssIhXXGFHKtR9Ewa8g=s72-c-k-c0x00ffffff-no-rj" /></div>
                      <div className="name">
                        <h3 className="m-0 p-0">{item.fecha}</h3>
                      </div>
                    </div>
                  </div>


                ))}
            </div>
            <div className="col-lg-3">

              {datos && datos.filter(item => item.idcanal === c7) // Filtra solo los videos con idcanal=1
                .slice(0, 2) // Limita a los primeros 3 videos
                .map((item, index) => (



                  <div key={index} className="post-entry lg">
                    <a onClick={() => openDialog(item.codigo)}>
                      <img src={`https://img.youtube.com/vi/${item.codigo}/hqdefault.jpg`} alt className="img-fluid" />
                    </a>
                    <div className="post-meta"><span className="date">{item.nombre}</span> <span className="mx-1">•</span> <span>{item.fecha}</span></div>
                    <h2><a href="blog-details.html">{item.titulo}</a></h2>

                    <div className="d-flex align-items-center author">
                      <div className="photo"><img src="https://yt3.googleusercontent.com/ytc/AIdro_n-lRPOdblZJINRJ79DOP30Xocq7wUEK5AbgKvdUA1g6a8=s72-c-k-c0x00ffffff-no-rj" /></div>
                      <div className="name">
                        <h3 className="m-0 p-0">{item.fecha}</h3>
                      </div>
                    </div>
                  </div>


                ))}
            </div>
            <div className="col-lg-3">

              {datos && datos.filter(item => item.idcanal === c8) // Filtra solo los videos con idcanal=1
                .slice(0, 4) // Limita a los primeros 3 videos
                .map((item, index) => (



                  <div key={index} className="post-entry lg">
                    <a onClick={() => openDialog(item.codigo)}>
                      <img src={`https://img.youtube.com/vi/${item.codigo}/hqdefault.jpg`} alt className="img-fluid" />
                    </a>
                    <div className="post-meta"><span className="date">{item.nombre}</span> <span className="mx-1">•</span> <span>{item.fecha}</span></div>
                    <h2><a href="blog-details.html">{item.titulo}</a></h2>

                    <div className="d-flex align-items-center author">
                      <div className="photo"><img src={`https://yt3.googleusercontent.com/yp807d3F1ceiKWv3vGyuHZhEKqHk0QPboGiyFwHgydvdN6NoecSYEaAsZtlYXB9YW8fm2eSL=s72-c-k-c0x00ffffff-no-rj`} alt className="img-fluid" /></div>
                      <div className="name">
                        <h3 className="m-0 p-0">{item.fecha}</h3>
                      </div>
                    </div>
                  </div>


                ))}
            </div>
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
      </section>{/* /Culture Category Section */}
      )
    </div>

  )
}
export default Bloque1