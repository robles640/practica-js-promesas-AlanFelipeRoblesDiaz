import { obtenerEstudiantes } from "./services.js";

async function mostrarEstudiantes() {
  try {
    console.log("Cargando lista de estudiantes...");
    const lista = await obtenerEstudiantes();
    console.log("Estudiantes encontrados:");
    lista.forEach((e) => console.log(`${e.id}. ${e.nombre} - ${e.carrera}`));
  } catch (error) {
    console.error("Error:", error);
  } finally {
    console.log("Consulta finalizada.");
  }
}

mostrarEstudiantes();
