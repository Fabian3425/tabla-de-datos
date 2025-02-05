import { useFetch } from "./useFetch";
import React, { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import InputSearch from "./components/InputSearch";
import { ContenedorHead, ContenedorApp, ContenedorFiltros, Button} from "./elements/filterStyle"

function App() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const [filterText, setFilterText] = useState("");
  const [filterEmail, setFilterEmail] = useState("");

  const columns = [
    { name: "ID", selector: (row) => row.id, sortable: true,},
    { name: "Nombre", selector: (row) => row.name, sortable: true,},
    { name: "Usuario", selector: (row) => row.username, sortable: true,},
    { name: "Email", selector: (row) => row.email, sortable: true,},
    { name: "Teléfono", selector: (row) => row.phone, sortable: true,},
    { name: "Sitio Web", selector: (row) => row.website, sortable: true,},
    { name: "Compañía", selector: (row) => row.company.name, sortable: true,},
    { name: "Dirección", selector: (row) => `${row.address.street}, ${row.address.suite},
     ${row.address.city}, ${row.address.zipcode}`, sortable: true,},
  ];

  const filteredData = useMemo(() => {  
      if(!data) return [];

      return data.filter((item) =>
        item.name.toLowerCase().includes(filterText.toLowerCase()) &&
        item.email.toLowerCase().includes(filterEmail.toLowerCase())
      );
  }, [data, filterText, filterEmail]);

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error al cargar los datos.</p>;

  return (
    <ContenedorApp >
      <ContenedorHead>
        <div>
          <h1>Tabla de usuarios</h1>
        </div>
        <ContenedorFiltros>
          <div>
          <InputSearch 
          placeholder="Buscar por nombre..." 
          value={filterText} 
          onChange={(e) => setFilterText(e.target.value)} 
          />
          <Button onClick={() => setFilterText("")}>Limpiar</Button>
        </div>
        <div>
          <InputSearch 
            placeholder="Buscar por email..." 
            value={filterEmail} 
            onChange={(e) => setFilterEmail(e.target.value)} 
          />
          <Button onClick={() => setFilterText("")}>Limpiar</Button>
        </div>
        </ContenedorFiltros>
      </ContenedorHead>
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        progressPending={loading}
        subHeader
      />
    </ContenedorApp >
  );
}

export default App;