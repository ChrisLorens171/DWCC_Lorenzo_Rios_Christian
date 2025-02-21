import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function TablaRow({data,deleteData,setDataToEdit}) {
    
  return (
    <tr>
        <td>{data.firstName}</td>
        <td>{data.lastName}</td>
        <td>{data.email}</td>
        <td>
            <FontAwesomeIcon icon={faCheck} style={{color:"green",padding:".5rem"}} onClick={ev=>setDataToEdit(data)}/>
            <FontAwesomeIcon icon={faTrash} style={{color:"red",padding:".5rem"}} onClick={ev=>deleteData(data.id)}/>
        </td>
    </tr>
  )
}

export default TablaRow
