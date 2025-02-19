import React, { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"

const Form1 = () => {
  const [libros, setLibros] = useState([])

  const formik = useFormik({
    initialValues: {
      titulo: "",
      autor: "",
      isbn: "",
      estado: "",
      genero: ""
    },
    validationSchema: Yup.object({
      titulo: Yup.string()
        .max(50, "Debe tener 50 caracteres o menos")
        .required("El título es obligatorio"),
      autor: Yup.string()
        .max(40, "Debe tener 40 caracteres o menos")
        .required("El autor es obligatorio"),
      isbn: Yup.string()
        .matches(/^[0-9\-]+$/, "Debe contener solo números y guiones")
        .required("El ISBN es obligatorio"),
      estado: Yup.string().required('Estado es obligatorio').oneOf(['Nuevo', 'Usado'], 'Selecciona un estado')
    }),
    onSubmit: (values, { resetForm }) => {
      setLibros([...libros, values])
      resetForm()
    },
  })

  return (
    <div className="container">
      <h1>Gestionar Libros</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="titulo">Título</label>
          <input
            id="titulo"
            name="titulo"
            type="text"
            {...formik.getFieldProps("titulo")}
          />
          {formik.touched.titulo && formik.errors.titulo ? (
            <div className="error">{formik.errors.titulo}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="autor">Autor</label>
          <input
            id="autor"
            name="autor"
            type="text"
            {...formik.getFieldProps("autor")}
          />
          {formik.touched.autor && formik.errors.autor ? (
            <div className="error">{formik.errors.autor}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="isbn">ISBN</label>
          <input
            id="isbn"
            name="isbn"
            type="text"
            {...formik.getFieldProps("isbn")}
          />
          {formik.touched.isbn && formik.errors.isbn ? (
            <div className="error">{formik.errors.isbn}</div>
          ) : null}
        </div>

        <legend> 
          <div className="radio">
            <label htmlFor="estado">Nuevo</label>
            <input
              id="estado"
              name="estado"
              type="radio"
              value="Nuevo"
              {...formik.getFieldProps("estado")}
            />

            <label htmlFor="estado">Usado</label>
            <input
              id="estado"
              name="estado"
              type="radio"
              value="Usado"
              {...formik.getFieldProps("estado")}
            />

            {formik.touched.estado && formik.errors.estado ? (
              <div className="error">{formik.errors.estado}</div>
            ) : null}
          </div>
        </legend> 

        <button type="submit">Agregar Libro</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>ISBN</th>
            <th>Estado</th>
            <th>Genero</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {libros.map((libro, index) => (
            <tr key={index}>
              <td>{libro.titulo}</td>
              <td>{libro.autor}</td>
              <td>{libro.isbn}</td>
              <td>{libro.estado}</td>
              <td>{libro.genero}</td>
              <td>
                <i
                  className="fa fa-trash"
                  onClick={() => {
                    setLibros(libros.filter((_, i) => i !== index))
                  }}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Form1
