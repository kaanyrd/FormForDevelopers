import React from 'react'
import { useFormik } from "formik"


function NewForm() {

  const { handleChange, handleSubmit, handleReset ,values, isSubmitting } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: ""
    },
    onSubmit: async(values, bag)=> {
      await new Promise((r)=> setTimeout(r, 2000))
      console.log(values)
      bag.resetForm()
    }
  })

  return (
    <div>
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <div>
            <div><label htmlFor="firstName">Name</label></div>
            <div><input value={values.firstName} id="firstName" name="firstName" onChange={handleChange("firstName")} disabled={isSubmitting}/></div>
          </div>
          <div>
            <div><label htmlFor="lastName">Last Name</label></div>
            <div><input value={values.lastName} id="lastName" name="lastName" onChange={handleChange("lastName")} disabled={isSubmitting}/></div>
          </div>
          <div>
            <div><label htmlFor="email">E-mail</label></div>
            <div><input value={values.email} id="email" name="email" onChange={handleChange("email")} disabled={isSubmitting}/></div>
          </div>
          <div>
            <button type='submit'>Send Form</button>
            <button type='reset'>Rest Form</button>
          </div>
        </form>
    </div>
  )
}

export default NewForm