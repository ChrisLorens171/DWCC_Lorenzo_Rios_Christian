import React from 'react'
import TablaRow from './TablaRow'

function TablaRowList({db,deleteData,setDataToEdit}) {
  return (
    db.length>0
    ? db.map(el=><TablaRow key={el.email} data={el} deleteData={deleteData} setDataToEdit={setDataToEdit}/>)
    : <tr><td colSpan="4">Sin datos</td></tr>   
  )
}
export default TablaRowList
