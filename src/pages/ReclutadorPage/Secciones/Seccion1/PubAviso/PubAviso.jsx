import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PubAviso.css';
import Header from '../../../../../components/Header/Header';

const PubAviso = () => {
  const navigate = useNavigate();
  navigate('/ReclutadorPage');

  return (
    <>
      <Header />

      <div className="publicar-container">
      <h1>Publicar oferta</h1>


      <section className="card">
        <h2>Visibilidad del aviso</h2>

        <div className="checkbox-group">
          <label>
            <input type="checkbox" />
            Aviso impulsado
          </label>
          <label>
            <input type="checkbox" />
            Oferta destacada
          </label>
          <label>
            <input type="checkbox" />
            Aviso urgente
          </label>
          <label>
            <input type="checkbox" />
            No Aplica
          </label>
        </div>

        <div className="warning-box">
          <strong>Oferta destacada</strong>
          <p>
            Los avisos destacados aparecen en las primeras posiciones y tienen
            más visibilidad que un aviso común.
          </p>
        </div>

        <label>
          Ocultar nombre de la empresa:
          <select>
            <option>Sí</option>
            <option>No</option>
          </select>
        </label>

        <label>
          Modificar razón de contacto:
          <input type="text" placeholder="Razón de contacto" />
        </label>

        <label>
          Mostrar teléfono de contacto:
          <select>
            <option>Sí</option>
            <option>No</option>
          </select>
        </label>

        <label>
          Mostrar dirección de contacto:
          <select>
            <option>Sí</option>
            <option>No</option>
          </select>
        </label>
      </section>


      <section className="card">
        <h2>Datos del aviso</h2>
        <form>
          <label>
            Título del aviso:
            <input type="text" />
          </label>
          <label>
            Área:
            <input type="text" />
          </label>
          <label>
            Descripción del trabajo:
            <textarea rows="4" />
          </label>
          <label>
            Tipo de jornada:
            <select>
              <option>Completa</option>
              <option>Parcial</option>
            </select>
          </label>
          <label>
            Modalidad:
            <select>
              <option>Presencial</option>
              <option>Remoto</option>
              <option>Híbrido</option>
            </select>
          </label>
          <label>
            Tipo de contrato:
            <select>
              <option>Indefinido</option>
              <option>Temporal</option>
              <option>Freelance</option>
            </select>
          </label>
          <label>
            Sueldo estimado:
            <input type="text" />
          </label>
          <label>
            Ciudad:
            <input type="text" />
          </label>
          <label>
            Cantidad de vacantes:
            <input type="number" min="1" />
          </label>
        </form>
      </section>


      <section className="card">
        <h2>Requisitos</h2>
        <form>
          <label>
            Años de experiencia similar:
            <input type="number" />
          </label>
          <label>
            Edad:
            <input type="number" />
          </label>
          <label>
            Estudio mínimo:
            <select>
              <option>Educación básica</option>
              <option>Educación media</option>
              <option>Educación superior</option>
            </select>
          </label>
          <label>
            Idiomas:
            <input type="text" placeholder="Ej: Español nativo, Inglés B2" />
          </label>
          <label>
            Destreza o conocimiento:
            <input type="text" />
          </label>

          <div className="radio-group">
            <label>Licencia de conducir:</label>
            <label><input type="radio" name="licencia" /> Sí</label>
            <label><input type="radio" name="licencia" /> No</label>
            <label><input type="radio" name="licencia" /> Sin permiso</label>
          </div>

          <div className="radio-group">
            <label>Disponibilidad para viajar:</label>
            <label><input type="radio" name="viajar" /> Sí</label>
            <label><input type="radio" name="viajar" /> No</label>
          </div>

          <label>Disponibilidad para cambiar de residencia:</label>
          <input type="text" placeholder="Ej: Inmediata, 1 mes, etc." />

          <fieldset>
            <legend>Tipo de discapacidad:</legend>
            <label><input type="checkbox" /> Visual</label>
            <label><input type="checkbox" /> Auditiva</label>
            <label><input type="checkbox" /> Física</label>
            <label><input type="checkbox" /> Psicosocial</label>
            <label><input type="checkbox" /> Intelectual</label>
            <label><input type="checkbox" /> Múltiple</label>
            <label><input type="checkbox" /> No aplica</label>
          </fieldset>
        </form>
      </section>


      <section className="card">
        <h2>Preguntas de filtrado</h2>
        <p className="info">
          Añade preguntas de filtro con el objetivo de obtener información más
          específica sobre el candidato.
        </p>
        <button className="btn-orange">Añadir pregunta</button>
        <p style={{ marginTop: "1rem" }}>Tus preguntas</p>
        <textarea rows="3" placeholder="Ej: ¿Tiene disponibilidad inmediata?" />

        <button className="btn-submit">Publicar</button>
      </section>
    </div>
    </>
  );
};

export default PubAviso;