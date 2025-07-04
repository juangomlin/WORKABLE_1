import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderReclutador from '../../../components/HeaderReclutador/HeaderReclutador';
import './PublicacionPage.css';

const PublicacionPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <HeaderReclutador />

      <main className="container-main-PB">
        <h1 className="title-page-PB">Publicar oferta</h1>

        <section className="section-card-PB">
          <h2 className="title-section-PB">Visibilidad del aviso</h2>

          <div className="group-checkbox-PB">
            <label htmlFor="avisoImpulsado">
              <input type="checkbox" id="avisoImpulsado" name="avisoImpulsado" />
              Aviso impulsado
            </label>
            <label htmlFor="ofertaDestacada">
              <input type="checkbox" id="ofertaDestacada" name="ofertaDestacada" />
              Oferta destacada
            </label>
            <label htmlFor="avisoUrgente">
              <input type="checkbox" id="avisoUrgente" name="avisoUrgente" />
              Aviso urgente
            </label>
            <label htmlFor="noAplicaVisibilidad">
              <input type="checkbox" id="noAplicaVisibilidad" name="noAplicaVisibilidad" />
              No Aplica
            </label>
          </div>

          <div className="box-warning-PB">
            <strong>Oferta destacada</strong>
            <p>
              Los avisos destacados aparecen en las primeras posiciones y tienen
              más visibilidad que un aviso común.
            </p>
          </div>

          <label htmlFor="ocultarNombreEmpresa">
            Ocultar nombre de la empresa:
            <select id="ocultarNombreEmpresa" name="ocultarNombreEmpresa">
              <option value="si">Sí</option>
              <option value="no">No</option>
            </select>
          </label>

          <label htmlFor="razonContacto">
            Modificar razón de contacto:
            <input type="text" id="razonContacto" name="razonContacto" placeholder="Razón de contacto" />
          </label>

          <label htmlFor="mostrarTelefono">
            Mostrar teléfono de contacto:
            <select id="mostrarTelefono" name="mostrarTelefono">
              <option value="si">Sí</option>
              <option value="no">No</option>
            </select>
          </label>

          <label htmlFor="mostrarDireccion">
            Mostrar dirección de contacto:
            <select id="mostrarDireccion" name="mostrarDireccion">
              <option value="si">Sí</option>
              <option value="no">No</option>
            </select>
          </label>
        </section>

        <section className="section-card-PB">
          <h2 className="title-section-PB">Datos del aviso</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="tituloAviso">
              Título del aviso:
              <input type="text" id="tituloAviso" name="tituloAviso" required />
            </label>
            <label htmlFor="areaTrabajo">
              Área:
              <input type="text" id="areaTrabajo" name="areaTrabajo" required />
            </label>
            <label htmlFor="descripcionTrabajo">
              Descripción del trabajo:
              <textarea id="descripcionTrabajo" name="descripcionTrabajo" rows="4" required />
            </label>
            <label htmlFor="tipoJornada">
              Tipo de jornada:
              <select id="tipoJornada" name="tipoJornada">
                <option value="completa">Completa</option>
                <option value="parcial">Parcial</option>
              </select>
            </label>
            <label htmlFor="modalidadTrabajo">
              Modalidad:
              <select id="modalidadTrabajo" name="modalidadTrabajo">
                <option value="presencial">Presencial</option>
                <option value="remoto">Remoto</option>
                <option value="hibrido">Híbrido</option>
              </select>
            </label>
            <label htmlFor="tipoContrato">
              Tipo de contrato:
              <select id="tipoContrato" name="tipoContrato">
                <option value="indefinido">Indefinido</option>
                <option value="temporal">Temporal</option>
                <option value="freelance">Freelance</option>
              </select>
            </label>
            <label htmlFor="sueldoEstimado">
              Sueldo estimado:
              <input type="text" id="sueldoEstimado" name="sueldoEstimado" />
            </label>
            <label htmlFor="ciudad">
              Ciudad:
              <input type="text" id="ciudad" name="ciudad" required />
            </label>
            <label htmlFor="cantidadVacantes">
              Cantidad de vacantes:
              <input type="number" id="cantidadVacantes" name="cantidadVacantes" min="1" required />
            </label>
          </form>
        </section>

        <section className="section-card-PB">
          <h2 className="title-section-PB">Requisitos</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="anosExperiencia">
              Años de experiencia similar:
              <input type="number" id="anosExperiencia" name="anosExperiencia" />
            </label>
            <label htmlFor="edadRequerida">
              Edad:
              <input type="number" id="edadRequerida" name="edadRequerida" />
            </label>
            <label htmlFor="estudioMinimo">
              Estudio mínimo:
              <select id="estudioMinimo" name="estudioMinimo">
                <option value="basica">Educación básica</option>
                <option value="media">Educación media</option>
                <option value="superior">Educación superior</option>
              </select>
            </label>
            <label htmlFor="idiomas">
              Idiomas:
              <input type="text" id="idiomas" name="idiomas" placeholder="Ej: Español nativo, Inglés B2" />
            </label>
            <label htmlFor="destrezaConocimiento">
              Destreza o conocimiento:
              <input type="text" id="destrezaConocimiento" name="destrezaConocimiento" />
            </label>

            <div className="group-radio-PB">
              <label>Licencia de conducir:</label>
              <label htmlFor="licenciaSi"><input type="radio" id="licenciaSi" name="licencia" value="si" /> Sí</label>
              <label htmlFor="licenciaNo"><input type="radio" id="licenciaNo" name="licencia" value="no" /> No</label>
              <label htmlFor="licenciaSinPermiso"><input type="radio" id="licenciaSinPermiso" name="licencia" value="sin_permiso" /> Sin permiso</label>
            </div>

            <div className="group-radio-PB">
              <label>Disponibilidad para viajar:</label>
              <label htmlFor="viajarSi"><input type="radio" id="viajarSi" name="viajar" value="si" /> Sí</label>
              <label htmlFor="viajarNo"><input type="radio" id="viajarNo" name="viajar" value="no" /> No</label>
            </div>

            <label htmlFor="cambioResidencia">
              Disponibilidad para cambiar de residencia:
              <input type="text" id="cambioResidencia" name="cambioResidencia" placeholder="Ej: Inmediata, 1 mes, etc." />
            </label>

            <fieldset className="fieldset-PB">
              <legend className="legend-PB">Tipo de discapacidad:</legend>
              <label htmlFor="discapacidadVisual"><input type="checkbox" id="discapacidadVisual" name="discapacidad" value="visual" /> Visual</label>
              <label htmlFor="discapacidadAuditiva"><input type="checkbox" id="discapacidadAuditiva" name="discapacidad" value="auditiva" /> Auditiva</label>
              <label htmlFor="discapacidadFisica"><input type="checkbox" id="discapacidadFisica" name="discapacidad" value="fisica" /> Física</label>
              <label htmlFor="discapacidadPsicosocial"><input type="checkbox" id="discapacidadPsicosocial" name="discapacidad" value="psicosocial" /> Psicosocial</label>
              <label htmlFor="discapacidadIntelectual"><input type="checkbox" id="discapacidadIntelectual" name="discapacidad" value="intelectual" /> Intelectual</label>
              <label htmlFor="discapacidadMultiple"><input type="checkbox" id="discapacidadMultiple" name="discapacidad" value="multiple" /> Múltiple</label>
              <label htmlFor="discapacidadNoAplica"><input type="checkbox" id="discapacidadNoAplica" name="discapacidad" value="no_aplica" /> No aplica</label>
            </fieldset>
          </form>
        </section>

        <section className="section-card-PB">
          <h2 className="title-section-PB">Preguntas de filtrado</h2>
          <p className="text-info-PB">
            Añade preguntas de filtro con el objetivo de obtener información más
            específica sobre el candidato.
          </p>
          <button className="button-add-question-PB">Añadir pregunta</button>
          <p className="text-questions-title-PB">Tus preguntas</p>
          <textarea className="input-field-PB" rows="3" placeholder="Ej: ¿Tiene disponibilidad inmediata?" />

          <button className="button-submit-PB" type="submit">Publicar</button>
        </section>
      </main>
    </>
  );
};

export default PublicacionPage;