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
      // pozition: [], 
      school: "",
      department: "",
      salary: "",
      challenges: "",
      comments: "",
      help: "",

    },
    onSubmit: async (values, bag) => {
      await new Promise((r) => setTimeout(r, 2000))
      console.log(values);
      console.log(bag);
      bag.resetForm();
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
          <label htmlFor="pozition">Pozition</label>
          <div>
            <input type="checkbox" name='pozition' value="Back-end" onChange={handleChange("pozition")} disabled={isSubmitting} />
            <label htmlFor="Back-end">Back-End</label>
          </div>
          <div>
            <input type="checkbox" name='pozition' value="Front-end" onChange={handleChange("pozition")} disabled={isSubmitting} />
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
        {/* SCHOOL */}
        <div>
          <div><label htmlFor="school">School</label></div>
          <div><select name="school" id="school" value={values.school} onChange={handleChange("school")} disabled={isSubmitting}>
            <option value="not specified">-</option>
            <option value="IstanbulAydinUniversity">Istanbul Aydin University</option>
            <option value="IstanbulTechnicalUniversity">Istanbul Technical University</option>
            <option value="GalatasarayUniversity">Galatasaray University</option>
            <option value="NamikKemalUniversity">Namik Kemal University</option>
            <option value="BahcesehirUniversity">Bahcesehir University</option>
          </select></div>
        </div>
        {/* DEPARTMENT */}
        <div>
          <div><label htmlFor="department">Department</label></div>
          <div><select name="department" id="department" onChange={handleChange("department")} value={values.department} disabled={isSubmitting}>
            <option value="not specified">-</option>
            <option value="SoftwareEngineering">Software Engineering</option>
            <option value="ComputerEngineering">Computer Engineering</option>
            <option value="SoftwareDeveloper">Software Developer</option>
            <option value="InformationTechnology">Information Technology</option>
          </select></div>
        </div>
        {/* SALARY */}
        <div>
          <div><label htmlFor="salary">Salary</label></div>
          <div><select name="salary" id="salary" onChange={handleChange("salary")} value={values.salary} disabled={isSubmitting}>
            <option value="not specified">-</option>
            <option value="6.000-10.000 TL">6.000-10.000 TL</option>
            <option value="10.000-15.000 TL">10.000-15.000 TL</option>
            <option value="15.000-22.000 TL">15.000-22.000 TL</option>
            <option value="+ 22.000 TL">+22.000 TL</option>
          </select></div>
        </div>
        {/* CHALLENGES */}
        <div>
          <div><label htmlFor="challenges">Challenges</label></div>
          <div><select name="challenges" id="challenges" onChange={handleChange("challenges")} value={values.challenges} disabled={isSubmitting}>
            <option value="not specified">-</option>
            <option value="Couldn't find any internship">Couldn't find any internship</option>
            <option value="Regret your school department choice">Regret your school department choice</option>
            <option value="Inability to get rewarded for hard work">Inability to get rewarded for hard work</option>
            <option value="Difficulty in software partition selection process">Difficulty in software partition selection process</option>
            <option value="Difficulty in software learning process">Difficulty in software learning process</option>
            <option value="Other">Other...</option>
          </select></div>
        </div>
        {/* CHALLENGES COMMENT */}
        <div>
          <div><label htmlFor="comments">Comments About Challenges({values.challenges})</label></div>
          <div><textarea name="comments" id="comments" onChange={handleChange("comments")} value={values.comments} disabled={isSubmitting} placeholder="Any Challenge..."></textarea></div>
        </div>
        {/* HELP */}
        <div>
          <div><label htmlFor="help">Would you like to get help with this?</label></div>
          <div><textarea name="help" id="help" onChange={handleChange("help")} value={values.help} disabled={isSubmitting} placeholder="Yes, I need help..."></textarea></div>
        </div>





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