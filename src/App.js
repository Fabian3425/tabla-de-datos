import { useFetch } from "./useFetch";
import React, { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import InputSearch from "./components/InputSearch";
import { Button} from "./elements/filterStyle"

function App() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const [filterText, setFilterText] = useState("");

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

  //Este código filtra una lista de objetos llamada userNames, para 
  // devolver aquellos que cumplen con cierta condiciones :3
  const filteredItems = (data || []).filter((item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div>
        <InputSearch
          placeholder="Buscar por nombre..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <Button onClick={() => setFilterText("")}>Limpiar</Button>
      </div>
    );
  }, [filterText]);

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error al cargar los datos.</p>;

  return (
    <div>
      <h1>Tabla de datos</h1>
      <DataTable
        title="Usuarios"
        columns={columns}
        data={filteredItems}
        pagination
        progressPending={loading}
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
      />
    </div>
  );
}

export default App;