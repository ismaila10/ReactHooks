import React, { useState } from "react";
import ReactDOM from "react-dom";
import Client from "./Client";
import ClientForm from "./ClientForm";
import "./styles.css";

const App = () => {
  const [clients, setClients] = useState([
    { id: 1, nom: "Ismaila Diallo" },
    { id: 2, nom: "Dany Jean Charles" },
    { id: 3, nom: "Dorain Deguen" }
  ]);

  const handleDelete = (id) => {
    const updatedClients = [...clients];
    const index = updatedClients.findIndex((client) => client.id === id);

    updatedClients.splice(index, 1);

    setClients(updatedClients);
  };

  const handleAdd = (client) => {
    const createdClients = [...clients];
    createdClients.push(client);

    setClients(createdClients);
  };

  const title = "Liste des clients";

  return (
    <div>
      <h1> {title} </h1>
      <ul>
        {clients.map((client) => (
          <Client details={client} onDelete={handleDelete} />
        ))}
      </ul>
      <ClientForm onClientAdd={handleAdd} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
