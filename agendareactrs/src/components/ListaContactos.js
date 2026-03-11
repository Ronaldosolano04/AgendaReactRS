import React from "react";

function ListaContactos({ contactos }) {

return (

<div>

<h2>Lista de Contactos</h2>

<ul>

{contactos.map((contacto, index) => (

<li key={index}>
{contacto.nombre} {contacto.apellido} - {contacto.telefono}
</li>

))}

</ul>

</div>

);

}

export default ListaContactos;