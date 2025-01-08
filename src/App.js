import { useFetch } from "./useFetch";
import React from "react";
import DataTable from "react-data-table-component"

function App() {

  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const columns = [
    {
      name: 'ID',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Nombre',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Usuario',
      selector: row => row.username,
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'Teléfono',
      selector: row => row.phone,
      sortable: true,
    },
    {
      name: 'Sitio Web',
      selector: row => row.website,
      sortable: true,
    },
    {
      name: 'Compañía',
      selector: row => row.company.name, // Acceder al nombre de la compañía
      sortable: true,
    },
    {
      name: 'Dirección',
      selector: row => `${row.address.street}, ${row.address.suite}, ${row.address.city}, ${row.address.zipcode}`, // Formatear dirección
      sortable: true,
    },
  ];


  return (
    <div>
      <h1>Tabla de datos</h1>
      {error && <span>Error: {error}</span>}
      {loading && <span>Loading...</span>}
      <DataTable 
        columns={columns}
        data={data || []}
        pagination
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5, 10, 25, 50, 100,250]}
      />
    </div>
  );

}

export default App;
