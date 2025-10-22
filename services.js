import { estudiantes } from "./data.js";

export function obtenerEstudiantes() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (estudiantes.length > 0) {
        resolve(estudiantes);
      } else {
        reject("No hay estudiantes registrados.");
      }
    }, 2000); // Simula el tiempo de espera de una API
  });
}
