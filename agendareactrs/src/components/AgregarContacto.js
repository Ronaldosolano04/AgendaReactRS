import React, { useState } from "react";

function AgregarContacto({ agregarContacto }) {

const [nombre, setNombre] = useState("");
const [apellido, setApellido] = useState("");
const [telefono, setTelefono] = useState("");

const enviarFormulario = (e) => {

e.preventDefault();

agregarContacto({
nombre,
apellido,
telefono
});

setNombre("");
setApellido("");
setTelefono("");

};

return (

<div>

<h2>Agregar Contacto</h2>

<form onSubmit={enviarFormulario}>

<input
placeholder="Nombre"
value={nombre}
onChange={(e) => setNombre(e.target.value)}
/>

<input
placeholder="Apellido"
value={apellido}
onChange={(e) => setApellido(e.target.value)}
/>

<input
placeholder="Telefono"
value={telefono}
onChange={(e) => setTelefono(e.target.value)}
/>

<button type="submit">
Agregar
</button>

</form>

</div>

);

}

export default AgregarContacto;