import './App.css'
import Form from '../components/Form'
import Tabla from '../components/Tabla'
import { useState } from 'react'


function App() {
  const [db,setDb]=useState([])
  const [dataToEdit,setDataToEdit]=useState(null)

  const createData=(data)=>{
    data.id=new Date();
    setDb([...db,data])
  }

  const deleteData=(id)=>{
    const newDb=db.filter(el=>el.id!=id)
    setDb(newDb)
  }

  const updateData=(data)=>{
    const newDb=db.map(el=>el.id==data.id?data:el)
    setDb(newDb)
  }

  return (
    <>
      <Form db={db} createData={createData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} updateData={updateData}/>
      <Tabla db={db} deleteData={deleteData} setDataToEdit={setDataToEdit}/>
    </>
  )
}

export default App
