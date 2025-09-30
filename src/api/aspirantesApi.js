import { data } from "react-router-dom";

export const buscarAspirantes = async () => {
  try {
    const res = await fetch('http://localhost:8080/api/aspirante');
    if (!res.ok){
      throw new Error('Error al obtener aspirante')
    }
    return await res.json();
  } catch (error) {
    if (error.message.includes("Failed to fetch") || error.message.includes("NetworkError")){
      throw new Error('No se pudo conectar con e servidor')
    }
  }
};

export const crearAspirante = async (data) => {
  const res = await fetch('http://localhost:8080/api/aspirante',{
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data),
  });
  if(!res.ok)
    throw new Error('Error al crear aspirante');
    return res.json();
};