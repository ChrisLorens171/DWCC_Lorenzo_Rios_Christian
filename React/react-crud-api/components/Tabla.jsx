import React from 'react'
import TablaRowList from './TablaRowList'

function Tabla({db,deleteData,setDataToEdit}) {
  return (
    <table border={1}>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <TablaRowList db={db} deleteData={deleteData} setDataToEdit={setDataToEdit}/>
        </tbody>
    </table>
  )
}

export default Tabla
