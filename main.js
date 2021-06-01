const d = document,
  w = window,
  nombre = d.querySelector(`.nombre`),
  numero = d.querySelector(`.numero`),
  direccion = d.querySelector(`.direccion`),
  btnAgregarTarea = d.querySelector(`.btn-agregar-tarea`),
  listadoTareas = d.querySelector(`.listado-tareas`),
  /* Accediendo al Local Storage */
  db = w.localStorage;

btnAgregarTarea.onclick = () => {
  let contacto = {
    id: Math.random(1, 100),
    nombre: nombre.value,
    numero: numero.value,
    direccion: direccion.value,
  };
  guardarContacto(db, contacto);
};
cargarContactos(db, listadoTareas);
