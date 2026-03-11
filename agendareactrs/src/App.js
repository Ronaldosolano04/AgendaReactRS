import React, { useEffect, useState } from "react";
import ListaContactos from "./components/ListaContactos";
import AgregarContacto from "./components/AgregarContacto";

function App() {

const [contactos, setContactos] = useState([]);

const obtenerContactos = () => {

fetch("http://www.raydelto.org/agenda.php")
.then(response => response.json())
.then(data => setContactos(data));

};

useEffect(() => {
obtenerContactos();
}, []);

const agregarContacto = (contacto) => {

fetch("http://www.raydelto.org/agenda.php", {
method: "POST",
body: JSON.stringify(contacto)
})
.then(response => response.json())
.then(() => {
obtenerContactos();
});

};

return (

<div>

<h1>Agenda de Contactos</h1>

<AgregarContacto agregarContacto={agregarContacto} />

<ListaContactos contactos={contactos} />

</div>

);

}

export default App;