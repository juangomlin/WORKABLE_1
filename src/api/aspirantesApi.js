import { data } from "react-router-dom";

export const buscarAspirantesporId = async (id) => {
    const res = await fetch(`http://localhost:8080/api/aspirante/${id}`,{
      method: "GET",
    });
    if (!res.ok)throw new Error('Datos no encontrados');
    return res.json();
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