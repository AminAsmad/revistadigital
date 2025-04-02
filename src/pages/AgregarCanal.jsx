
import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";


const API_AGREGAR = 'http://localhost/backendrd/api/canales/post.php';
const API_CANALES = 'http://localhost/backendrd/api/canales/get/';
const AgregarCanal = () => {
    const [canales, setCanales] = useState([]); // Estado para almacenar la lista de canales
    const [nombre, setNombre] = useState(""); // Estado para el campo "nombre"
    const [ruta, setRuta] = useState(""); // Estado para el campo "ruta"
    const [loading, setLoading] = useState(false); // Estado para manejar el estado de carga
    const [error, setError] = useState(null); // Estado para manejar errores
    const toast = React.useRef(null); // Referencia para mostrar mensajes con Toa
    const getDatos = async () => {
        try {
            const response = await fetch(API_CANALES);
            const data = await response.json();
            console.log(data);
            setCanales(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getDatos();
    }, []);

    // Función para agregar un nuevo canal
    const agregarCanal = async (e) => {
        e.preventDefault();

        // Validar que los campos no estén vacíos
        if (!nombre.trim() || !ruta.trim()) {
            toast.current.show({
                severity: "warn",
                summary: "Advertencia",
                detail: "Por favor, completa todos los campos.",
            });
            return;
        }

        try {
            const response = await fetch(API_AGREGAR, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nombre, ruta }),
            });

            if (!response.ok) {
                throw new Error("Error al agregar el canal.");
            }

            const data = await response.json();
            console.log("Respuesta del servidor:", data);

            // Limpiar los campos después de agregar
            setNombre("");
            setRuta("");

            // Recargar la lista de canales
            getDatos();

            // Mostrar mensaje de éxito
            toast.current.show({
                severity: "success",
                summary: "Éxito",
                detail: "Canal agregado exitosamente.",
            });
        } catch (err) {
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: err.message,
            });
        }
    };

    return (
        <div className="container mt-5" data-bs-theme="dark">
            <h4 className="mb-4 text-center">Lista de Canales</h4>

            <div className="col-md-8 mx-auto">
                <div className="card bg-body-tertiary p-4 mb-3">
                    <p className="text-center py-3">Agregar un Canal</p>
                    <form onSubmit={agregarCanal}>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">
                                Nombre del Canal
                            </label>
                            <InputText
                                id="nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                className="form-control"
                                placeholder="Ejemplo: Neutrality Studies Español"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="ruta" className="form-label">
                                Ruta del Canal
                            </label>
                            <InputText
                                id="ruta"
                                value={ruta}
                                onChange={(e) => setRuta(e.target.value)}
                                className="form-control"
                                placeholder="Ejemplo: @NeutralityStudiesES"
                            />
                        </div>
                        <div className="d-flex justify-content-end">
                            <Button type="submit" label="Agregar Canal" className="p-button-success" />
                        </div>

                    </form>
                </div>
            </div>
            <div className="card">
                {loading && <p>Cargando canales...</p>}
                {error && <p className="text-danger">Error: {error}</p>}
                {!loading && !error && (
                    <DataTable value={canales} responsiveLayout="scroll">
                        <Column field="id" header="ID"></Column>
                        <Column field="nombre" header="Nombre"></Column>
                        <Column field="ruta" header="Ruta"></Column>
                        <Column
                            header="Acciones"
                            body={(rowData) => (
                                <Button
                                    icon="pi pi-trash"
                                    className="p-button-danger"
                                    tooltip="Eliminar"
                                    tooltipOptions={{ position: "top" }}
                                    onClick={() => {
                                        // Aquí puedes implementar la eliminación si es necesario
                                        console.log("Eliminar canal con ID:", rowData.id);
                                    }}
                                />
                            )}
                        ></Column>
                    </DataTable>
                )}
            </div>


            <Toast ref={toast} />
        </div>
    )
}

export default AgregarCanal