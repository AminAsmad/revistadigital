import React, { useState, useEffect } from "react";
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from "primereact/inputtextarea";
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Toast } from "primereact/toast";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
const API = 'http://localhost/backendrd/api/videos/get/';

const API_AGREGAR = 'http://localhost/backendrd/api/videos/post.php';
const API_CANALES = 'http://localhost/backendrd/api/canales/get/';


const AgregarVideo = () => {
    const [videos, setVideos] = useState([]);
    const [canalOptions, setCanalOptions] = useState([]);
    // Estados para los campos del formulario
    const [idcanal, setIdcanal] = useState('');
    const [titulo, setTitulo] = useState('');
    const [subtitulo, setSubtitulo] = useState('');
    const [codigo, setCodigo] = useState('');
    const [fecha, setFecha] = useState(null);
    const toast = React.useRef(null); // Referencia para mostrar mensajes con Toa
    const [selectedVideoCode, setSelectedVideoCode] = useState('');
    const [visible, setVisible] = useState(false); // Estado para controlar la visibilidad del Dialog


    const getDatos = async () => {
        try {
            const response = await fetch(API_CANALES);
            const data = await response.json();
            console.log(data);
            const formattedOptions = data.map((canal) => ({
                label: canal.nombre,
                value: canal.id,
            }));
            setCanalOptions(formattedOptions);
        } catch (error) {
            console.error(error);
        }
    };


    const getVideos = async () => {
        try {
            const response = await fetch(API);
            const data = await response.json();
            console.log(data);
            setVideos(data);


        } catch (error) {
            console.error(error);
        }

    };
    useEffect(() => {
        getDatos();
        getVideos();
    }, []);

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validar que todos los campos estén completos
        if (!idcanal || !titulo || !subtitulo || !codigo || !fecha) {
            toast.current.show({
                severity: "warn",
                summary: "Advertencia",
                detail: "Por favor, completa todos los campos.",
            });
            return;
        }

        // Crear el objeto de datos a enviar
        const nuevoVideo = {
            idcanal,
            titulo,
            subtitulo,
            codigo,
            fecha: fecha.toISOString().split("T")[0], // Convertir la fecha a formato YYYY-MM-DD
        };

        try {
            // Enviar los datos al backend mediante fetch
            const response = await fetch(API_AGREGAR, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(nuevoVideo),
            });

            // Verificar si la respuesta fue exitosa
            if (!response.ok) {
                const errorData = await response.json(); // Intentar obtener detalles del error del backend
                throw new Error(errorData?.error || "Error al agregar el video.");
            }

            // Limpiar los campos del formulario
            setIdcanal("");
            setTitulo("");
            setSubtitulo("");
            setCodigo("");
            setFecha(null);

            // Recargar los datos para reflejar el cambio
            getDatos();

            // Mostrar mensaje de éxito
            toast.current.show({
                severity: "success",
                summary: "Éxito",
                detail: "El video se agregó exitosamente.",
            });
        } catch (error) {
            // Mostrar mensaje de error
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: error.message || "Ocurrió un error inesperado.",
            });
        }
    };
    const imageBodyTemplate = (item) => {
        const openVideo = () => {
            openDialog(item.codigo)
        };

        return (
            <div>
                <img
                    src={`https://img.youtube.com/vi/${item.codigo}/hqdefault.jpg`}
                    alt={`Thumbnail de ${item.codigo}`}
                    className="img-fluid"
                    width={150}
                    onClick={openVideo} // Agregar el evento onClick aquí
                    style={{ cursor: 'pointer' }} // Cambiar el cursor para indicar que es clickeable
                />
            </div>
        );
    };
    const openDialog = (codigo) => {
        setSelectedVideoCode(codigo);
        setVisible(true);
    };
    // Función para cerrar el Dialog
    const closeDialog = () => {
        setVisible(false);
    }

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center">Agregar Nuevo Video</h2>
            <form onSubmit={handleSubmit} className="row g-3 m-4">
                {/* Campo ID del Canal */}
                <div className="col-md-6">
                    <label htmlFor="idcanal" className="form-label">
                        Canal
                    </label>
                    <Dropdown
                        id="idcanal"
                        value={idcanal}
                        options={canalOptions}
                        onChange={(e) => setIdcanal(e.value)}
                        placeholder="Selecciona un canal"
                        className="w-100"
                    />
                </div>

                {/* Campo Título */}
                <div className="col-md-6">
                    <label htmlFor="titulo" className="form-label">
                        Título
                    </label>
                    <InputText
                        id="titulo"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        className="form-control"
                        placeholder="Ingresa el título del video"
                    />
                </div>

                {/* Campo Subtítulo */}
                <div className="col-12">
                    <label htmlFor="subtitulo" className="form-label">
                        Subtítulo
                    </label>
                    <InputTextarea
                        id="subtitulo"
                        value={subtitulo}
                        onChange={(e) => setSubtitulo(e.target.value)}
                        rows={4} // Número de filas visibles
                        className="form-control"
                        placeholder="Ingresa el subtítulo del video"
                    />
                </div>

                {/* Campo Código del Video */}
                <div className="col-md-6">
                    <label htmlFor="codigo" className="form-label">
                        Código del Video (YouTube)
                    </label>
                    <InputText
                        id="codigo"
                        value={codigo}
                        onChange={(e) => setCodigo(e.target.value)}
                        className="form-control"
                        placeholder="Ejemplo: YyGRpyirZQg"
                    />
                </div>

                {/* Campo Fecha */}
                <div className="col-md-6">
                    <label htmlFor="fecha" className="form-label">
                        Fecha
                    </label>
                    <Calendar
                        id="fecha"
                        value={fecha}
                        onChange={(e) => setFecha(e.value)}
                        dateFormat="yy-mm-dd"
                        className="w-100"
                        placeholder="Selecciona una fecha"
                    />
                </div>

                {/* Botón de Envío */}
                <div className="col-12 text-center">
                    <Button type="submit" label="Agregar Video" className="p-button-success" />
                </div>
            </form>

            <DataTable value={videos} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}>
                <Column field="id" header="ID" sortable></Column>
                <Column field="nombre" header="Nombre" sortable></Column>
                <Column field="titulo" header="Titulo" sortable></Column>
                <Column header="Image" body={imageBodyTemplate}>
                </Column>



            </DataTable>




            <Toast ref={toast} />



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
        </div>
    );
};

export default AgregarVideo;


