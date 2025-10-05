import { data } from "react-router-dom";

const API_URL = "http://localhost:8080/api/aspirante";

export const buscarAspirantePorId = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error("Datos no encontrados");
  return res.json();
};

export const crearAspirante = async (data) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error al crear aspirante");
  return res.json();
};
