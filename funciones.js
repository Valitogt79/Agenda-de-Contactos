const guardarContacto = (db, contacto) => {
  db.setItem(contacto.id, JSON.stringify(contacto));
  w.location.href = `/`;
};

const cargarContactos = (db, parentNode) => {
  let claves = Object.keys(db);
  for (clave of claves) {
    let contacto = JSON.parse(db.getItem(clave));
    crearContacto(parentNode, contacto, db);
  }
};

const crearContacto = (parentNode, contacto, db) => {
  let divContacto = d.createElement("div"),
    nombreContacto = d.createElement("h3"),
    numeroContacto = d.createElement("p"),
    direccionContacto = d.createElement("p"),
    iconoBorrar = d.createElement("span");

  nombreContacto.innerHTML = contacto.nombre;
  numeroContacto.innerHTML = contacto.numero;
  direccionContacto.innerHTML = contacto.direccion;
  iconoBorrar.innerHTML = `delete_forever`;

  divContacto.classList.add(`tarea`);
  iconoBorrar.classList.add(`material-icons`, `icono`);

  iconoBorrar.onclick = () => {
    db.removeItem(contacto.id);
    w.location.href = `/`;
  };

  divContacto.appendChild(nombreContacto);
  divContacto.appendChild(numeroContacto);
  divContacto.appendChild(direccionContacto);
  divContacto.appendChild(iconoBorrar);

  parentNode.appendChild(divContacto);
};
