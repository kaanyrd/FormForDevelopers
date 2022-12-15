import React from 'react'
import { useFormik } from "formik"
import "./Components.css"



function NewForm() {

  const { handleChange, handleSubmit, handleReset, values, isSubmitting } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      birthOfDate: "",
      pozition: [],
      // position: [], 
      school: "",
      department: "",
      // salary: "",
      debtAmount: "",
      challenges: "",
      comments: "",
      help: "",

    },
    onSubmit: async (values, bag) => {
      await new Promise((r) => setTimeout(r, 2000))
      console.log(values);
      // console.log(bag);
      bag.resetForm();
    }
  })
  return (
    <div className='container'>
      <div className='row'>
        <div>
          <div>
            <form onSubmit={handleSubmit} onReset={handleReset}>

              {/* NAME */}
              <div>
                <div><label className='labelHeader' htmlFor="firstName">Name</label></div>
                <div><input size="70" placeholder='Please write your first name...' className='form-control' value={values.firstName} id="firstName" name="firstName" onChange={handleChange("firstName")} disabled={isSubmitting} /></div>
              </div>
              {/* LASTNAME */}
              <div>
                <div><label className='labelHeader' htmlFor="lastName">Last Name</label></div>
                <div><input placeholder='Please write your last name...' className='form-control' value={values.lastName} id="lastName" name="lastName" onChange={handleChange("lastName")} disabled={isSubmitting} /></div>
              </div>
              {/* GENDER */}
              <div id='genderChoose'>
                <div><label className='labelHeader' htmlFor="gender">Gender</label></div>
                <div>
                  <input id='male' type="radio" name='gender' value="male" onChange={handleChange("gender")} checked={values.gender === "male"} />
                  <label htmlFor="male">Male</label>

                  <input id='female' type="radio" name='gender' value="female" onChange={handleChange("gender")} checked={values.gender === "female"} />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
              {/* EMAIL */}
              <div>
                <div><label className='labelHeader' htmlFor="email">E-mail</label></div>
                <div><input placeholder='test@test.com' className='form-control' value={values.email} id="email" name="email" onChange={handleChange("email")} disabled={isSubmitting} /></div>
              </div>

              <div style={{display: "flex"}}>
                <div className='labelHeader' style={{display: "flex", flexDirection:"column"}}>
                  <label htmlFor="">Date</label>
                  <input id='dateIt' type="date" />
                </div>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginLeft: "auto", marginRight: "1.5rem"}}>
                  <label className='labelHeader' htmlFor="">Pozition</label>
                  <div>
                  <div>
                    
                  <input id='Back-end' type="checkbox" name='pozition' value="Back-end" onChange={handleChange("pozition")} disabled={isSubmitting}
                    checked={!!values?.pozition?.includes("Back-end")} />
                  <label htmlFor="Back-end">Back-End</label>
                  
                  <input id='Back-end' type="checkbox" name='pozition' value="Back-end" onChange={handleChange("pozition")} disabled={isSubmitting}
                    checked={!!values?.pozition?.includes("Back-end")} />
                  <label htmlFor="Back-end">Back-End</label>
                  
                  
                  <input id='Back-end' type="checkbox" name='pozition' value="Back-end" onChange={handleChange("pozition")} disabled={isSubmitting}
                    checked={!!values?.pozition?.includes("Back-end")} />
                  <label htmlFor="Back-end">Back-End</label>
                  </div>
                  
                  
                  <div>
                  <input id='Back-end' type="checkbox" name='pozition' value="Back-end" onChange={handleChange("pozition")} disabled={isSubmitting}
                    checked={!!values?.pozition?.includes("Back-end")} />
                  <label htmlFor="Back-end">Back-End</label>
                  
                  
                  <input id='Back-end' type="checkbox" name='pozition' value="Back-end" onChange={handleChange("pozition")} disabled={isSubmitting}
                    checked={!!values?.pozition?.includes("Back-end")} />
                  <label htmlFor="Back-end">Back-End</label>
                  
                  
                  <input id='Back-end' type="checkbox" name='pozition' value="Back-end" onChange={handleChange("pozition")} disabled={isSubmitting}
                    checked={!!values?.pozition?.includes("Back-end")} />
                  <label htmlFor="Back-end">Back-End</label>


                  </div>
                  </div>











                </div>
              </div>






              {/* DATE */}
              {/* <div>
                <div><label className='labelHeader' htmlFor="birthOfDate">Birth Of Date</label></div>
                <div><input className='form-control' value={values.birthOfDate} type="date" id='birthOfDate' name='birthOfDate' onChange={handleChange("birthOfDate")} disabled={isSubmitting} /></div>
              </div> */}
{/* BACKEND */}
                {/* <div>
                  <input id='Back-end' type="checkbox" name='pozition' value="Back-end" onChange={handleChange("pozition")} disabled={isSubmitting}
                    checked={!!values?.pozition?.includes("Back-end")} />
                  <label htmlFor="Back-end">Back-End</label>
                </div>
                <div>
                  <input id='Front-end' type="checkbox" name='pozition' value="Front-end" onChange={handleChange("pozition")} disabled={isSubmitting} checked={!!values?.pozition?.includes("Front-end")} />
                  <label htmlFor="Front-end">Front-End</label>
                </div>
                <div>
                  <input id='Mobile' type="checkbox" name='pozition' value="Mobile" onChange={handleChange("pozition")} disabled={isSubmitting} checked={!!values?.pozition?.includes("Mobile")} />
                  <label htmlFor="Mobile">Mobile</label>
                </div>
                <div>
                  <input id='Data' type="checkbox" name='pozition' value="Data" onChange={handleChange("pozition")} disabled={isSubmitting} checked={!!values?.pozition?.includes("Data")} />
                  <label htmlFor="Data">Data</label>
                </div>
                <div>
                  <input id='Game' type="checkbox" name='pozition' value="Game" onChange={handleChange("pozition")} disabled={isSubmitting} checked={!!values?.pozition?.includes("Game")} />
                  <label htmlFor="Game">Game</label>
                </div> */}
              {/* SCHOOL */}               {/* DEPARTMENT */}
              <div className='schoDep' style={{ display: "flex" }}>
                <div>
                  <label className='labelHeader' style={{ display: "flex", marginBottom: "-1rem", fontSize: "1.1rem", fontWeight: "700", width: "17rem" }} htmlFor="school">School</label>
                  <br />
                  <select className='form-control' name="school" id="school" value={values.school} onChange={handleChange("school")} disabled={isSubmitting}>
                    <option value="not specified">-</option>
                    <option value="IstanbulAydinUniversity">Istanbul Aydin University</option>
                    <option value="GalatasarayUniversity">Galatasaray University</option>
                    <option value="IstanbulTehcnicalUniversity">Istanbul Technical University</option>
                    <option value="NamikKemalUniversity">Namik Kemal University</option>
                    <option value="BahcesehirUniversity">Bahcesehir University</option>
                  </select>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "end", marginLeft: "auto" }}>
                  <label className='labelHeader' style={{ display: "flex", marginBottom: "-1rem", fontSize: "1.1rem", fontWeight: "700", width: "17rem" }} htmlFor="department">Department</label>
                  <br />
                  <select className='form-control' name="department" id="department" value={values.department} onChange={handleChange("department")} disabled={isSubmitting}>
                    <option value="not specified">-</option>
                    <option value="SoftwareEngineering">Software Engineering</option>
                    <option value="ComputerEngineering">Computer Engineering</option>
                    <option value="InformationTechnology">Information Technology</option>
                    <option value="SoftwareDeveloper">Software Developer</option>
                  </select>
                </div>
              </div>


              {/* SALARY */}
              <div>
                <div><label className='labelHeader' htmlFor="salary">Salary</label></div>
                <div><select className='form-control' name="salary" id="salary" onChange={handleChange("salary")} value={values.salary} disabled={isSubmitting}>
                  <option value="not specified">-</option>
                  <option value="6.000-10.000 TL">6.000-10.000 TL</option>
                  <option value="10.000-15.000 TL">10.000-15.000 TL</option>
                  <option value="15.000-22.000 TL">15.000-22.000 TL</option>
                  <option value="+ 22.000 TL">+22.000 TL</option>
                </select></div>
              </div>


              {/* CHALLENGES */}
              <div>
                <div><label className='labelHeader' htmlFor="challenges">Challenges</label></div>
                <div><select className='form-control' name="challenges" id="challenges" onChange={handleChange("challenges")} value={values.challenges} disabled={isSubmitting}>
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
                <div><label className='labelHeader' htmlFor="comments">Comments About Challenges</label></div>
                <div><textarea style={{ width: "100%", height: "10vh", resize: "none", padding: ".2rem" }} name="comments" id="comments" onChange={handleChange("comments")} value={values.comments} disabled={isSubmitting} placeholder="Any Challenge..."></textarea></div>
              </div>
              {/* HELP */}
              <div>
                <div><label className='labelHeader' htmlFor="help">Would you like to get help with this? How?</label></div>
                <div><textarea style={{ width: "100%", height: "10vh", resize: "none", padding: ".2rem" }} name="help" id="help" onChange={handleChange("help")} value={values.help} disabled={isSubmitting} placeholder="Yes, I need help..."></textarea></div>
              </div>
              {/* BUTTONS */}
              <div style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}>
                <button type='submit'>Send Form</button>
                <button type='reset'>Rest Form</button>
                <button type='button' className='btn btn-danger'>Click</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewForm