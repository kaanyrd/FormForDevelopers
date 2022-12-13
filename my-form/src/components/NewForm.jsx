import React from 'react'
import { useFormik } from "formik"



function NewForm() {

  const { handleChange, handleSubmit, handleReset, values, isSubmitting } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      birthOfDate: "",
      pozition: [],
      // school: "",
      // department: ""


    },
    onSubmit: async (values, bag) => {
      await new Promise((r) => setTimeout(r, 2000))
      console.log(values)
      bag.resetForm()
    }
  })
  return (
    <div>
      <form onSubmit={handleSubmit} onReset={handleReset}>

        {/* NAME */}
        <div>
          <div><label htmlFor="firstName">Name</label></div>
          <div><input value={values.firstName} id="firstName" name="firstName" onChange={handleChange("firstName")} disabled={isSubmitting} /></div>
        </div>
        {/* LASTNAME */}
        <div>
          <div><label htmlFor="lastName">Last Name</label></div>
          <div><input value={values.lastName} id="lastName" name="lastName" onChange={handleChange("lastName")} disabled={isSubmitting} /></div>
        </div>
        {/* GENDER */}
        <div>
          <span>Male</span>
          <input type="radio" name='gender' value="male" onChange={handleChange("gender")} checked={values.gender === "male"} />

          <span>Female</span>
          <input type="radio" name='gender' value="female" onChange={handleChange("gender")} checked={values.gender === "female"} />
        </div>
        {/* EMAIL */}
        <div>
          <div><label htmlFor="email">E-mail</label></div>
          <div><input value={values.email} id="email" name="email" onChange={handleChange("email")} disabled={isSubmitting} /></div>
        </div>
        {/* DATE */}
        <div>
          <div><label htmlFor="birthOfDate">Birth Of Date</label></div>
          <div><input value={values.birthOfDate} type="date" id='birthOfDate' name='birthOfDate' onChange={handleChange("birthOfDate")} disabled={isSubmitting} /></div>
        </div>
        {/* POZITION */}
        {/* <div>
          <div>
            <input type="checkbox" name='pozition' value="Back-end" onChange={handleChange("pozition")} disabled={isSubmitting}/>
            <label htmlFor="Back-end">Back-End</label>
          </div>
          <div>
            <input type="checkbox" name='pozition' value="Front-end" onChange={handleChange("pozition")} disabled={isSubmitting}/>
            <label htmlFor="Front-end">Front-End</label>
          </div>
          <div>
            <input type="checkbox" name='pozition' value="Mobile" onChange={handleChange("pozition")} disabled={isSubmitting} />
            <label htmlFor="Mobile">Mobile</label>
          </div>
          <div>
            <input type="checkbox" name='pozition' value="Data" onChange={handleChange("pozition")} disabled={isSubmitting} />
            <label htmlFor="Data">Data</label>
          </div>
          <div>
            <input type="checkbox" name='pozition' value="Game" onChange={handleChange("pozition")} disabled={isSubmitting} />
            <label htmlFor="Game">Game</label>
          </div>
        </div> */}





        {/* <div>
          <div><label htmlFor="school">School</label></div>
          <div><select name="school" id="school" value={values.school} onChange={handleChange("school")} disabled={isSubmitting}>
            <option value="IstanbulAydinUniversity" label=''>Istanbul Aydin University</option>
            <option value="IstanbulTechnicalUniversity" label='IstanbulTechnicalUniversity'>Istanbul Technical University</option>
            <option value="GalatasarayUniversity" label='GalatasarayUniversity'>Galatasaray University</option>
            <option value="NamikKemalUniversity" label='NamikKemalUniversity'>Namik Kemal University</option>
            <option value="BahcesehirUniversity" label='BahcesehirUniversity'>Bahcesehir University</option>
          </select></div>
        </div> */}
        {/* <div>
          <div><label htmlFor="department">Department</label></div>
          <div><select name="department" id="department" onChange={handleChange("department")} disabled={isSubmitting} value={values.department}>
            <option value="SoftwareEngineering">Software Engineering</option>
            <option value="ComputerEngineering">Computer Engineering</option>
            <option value="SoftwareDeveloper">Software Developer</option>
            <option value="InformationTechnology">Information Technology</option>
            </select></div>
        </div> */}



        {/* BUTTONS */}
        <div>
          <button type='submit'>Send Form</button>
          <button type='reset'>Rest Form</button>
        </div>
      </form>
    </div>
  )
}

export default NewForm