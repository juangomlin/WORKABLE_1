// src/api/empresasApi.js

export const getAllEmpresas = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/empresa/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("error al obtener empresas");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error.message.includes("Failed to fetch") || error.message.includes("NetworkError")) {
      throw new Error("no se pudo conectar con el servidor");
    }
    throw error;
  }
};

export const getEmpresaById = async (id) => {
  const response = await fetch(`http://localhost:8080/api/empresa/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("empresa no encontrada");
  }
  const data = await response.json();
  return data;
};

export const getAllEmpresasDto = async () => {
  const response = await fetch("http://localhost:8080/api/empresa", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("error al obtener empresas");
  }
  const data = await response.json();
  return data;
};

export const crearEmpresa = async (objeto) => {
  const response = await fetch("http://localhost:8080/api/empresa", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objeto)
  });

  if (!response.ok) {
    throw new Error("error al crear empresa");
  }
  const data = await response.json();
  return data;
};

export const eliminarEmpresa = async (id) => {
  const response = await fetch(`http://localhost:8080/api/empresa/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("error al eliminar empresa");
  }
  return null;
};
