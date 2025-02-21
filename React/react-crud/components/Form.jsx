import React, { useEffect } from 'react'
import { useFormik } from 'formik';

const Form = ({db,createData,dataToEdit,setDataToEdit,updateData}) => {
    const validate = values => {
        const errors = {};
      
        if (!values.firstName) {
          errors.firstName = 'Required';
        } else if (values.firstName.length > 15) {
          errors.firstName = 'Must be 15 characters or less';
        }
      
        if (!values.lastName) {
          errors.lastName = 'Required';
        } else if (values.lastName.length > 20) {
          errors.lastName = 'Must be 20 characters or less';
        }
      
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }

        if(db.find(el=>el.email==values.email && el.id!=values.id)) {
          errors.email="Email existente"
        }
      
        return errors;
    };

    const formik = useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        id:null
      },
      validate,
      onSubmit: (values,actions) => {
        //alert(JSON.stringify(values, null, 2));
        if(!values.id) {
          createData(values)  
        } else {
          updateData(values)
          setDataToEdit(formik.initialValues)
        }
        actions.resetForm()
      },
    });

    useEffect(()=>{
        if(dataToEdit) {
            formik.setValues(dataToEdit)
        }
    },[dataToEdit])

    return (
      <form onSubmit={formik.handleSubmit}>

        <div>
            <label htmlFor="firstName">First Name: </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
            ) : null}
        </div>

        <div>
            <label htmlFor="lastName">Last Name: </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
            ) : null}
        </div>

        <div>
            <label htmlFor="email">Email Address: </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              disabled={formik.values.id!=null}
            />
            {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
            ) : null}
        </div>
 
        <button type="submit" style={{margin:"1rem"}}>Submit</button>
      </form>
    );
  };
export default Form



