import './App.css'
import Form from '../components/Form'
import Tabla from '../components/Tabla'
import { useEffect, useState } from 'react'
import { helpHttp } from './helpers/helpHttp'
import Loader from '../components/Loader'
import Message from '../components/Message'


function App() {
  const [db,setDb]=useState([])
  const [dataToEdit,setDataToEdit]=useState(null)
  
  const [error,setError]=useState(null)
  const [loading,setLoading]=useState(false)

  let url="http://localhost:3000/usuarios"
  let api=helpHttp()

  useEffect(()=>{
    setLoading(true)
    api.get(url).then(resp=>{
      //console.log(resp)
      if(!resp.error) {
        setError(null)
        setDb(resp)
      } else {
        setError(resp)
        setDb(null)
      }
      setLoading(false)
    })

  },[url])

  const createData=(data)=>{
    data.id=new Date();

    api.post(url,{
      headers:{"Content-type":"application/json"},
      body:data
    }).then(resp=>{
      if (!resp.error) {
        setDb([...db,resp])
      } else {
        setError(resp)
      }
    })

  }

  const deleteData=(id)=>{
    let isDelete=window.confirm("Seguro que quieres borrar manin?")
    if(isDelete) {
      api.del(`${url}/${id}`).then(resp=>{
        if(resp.error) {
          const newDb=db.filter(el=>el.id!=id)
          setDb(newDb)
        } else {
          setError(resp)
        }
      })
    } else {
      return
    }

  }

  const updateData=(data)=>{
    api.put(`${url}/${data.id}`,{
      headers:{"Content-type":"application/json"},
      body:data
    }).then(resp=>{
      if(!resp.error) {
        const newDb=db.map(el=>el.id==data.id?data:el)
        setDb(newDb)
      } else {
        setError(resp)
      }
    })
  }

  return (
    <>
      <Form db={db} createData={createData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} updateData={updateData}/>
      
      {loading && <Loader/>}
      {error && <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545"/>}

      {db && <Tabla db={db} deleteData={deleteData} setDataToEdit={setDataToEdit}/>}
    </>
  )
}

export default App
