import React from 'react'
import { useFormik } from "formik"
import "../Components.css"
import validationSchema from './Validations/Validations'



function NewForm() {

  const { handleChange, handleSubmit, handleReset, handleBlur, values, isSubmitting, errors, touched } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      birthOfDate: "",
      pozition: [],
      school: "",
      department: "",
      salary: "",
      challenges: "",
      challengeComment: "",
      help: "",

    },
    onSubmit: async (values, bag) => {
      await new Promise((r) => setTimeout(r, 2000))
      console.log(values);
      // console.log(bag);
      bag.resetForm();
    },
    validationSchema
  })
  return (
    <div style={{backGroundColor: "white"}}>
      <div  className='container'>
      <div className='row'>
        <div>
          <div>
            <form onSubmit={handleSubmit} onReset={handleReset}>

              {/* NAME */}
              <div>
                <div><label className='labelHeader' htmlFor="firstName">*Name{errors.firstName && touched.firstName && <div style={{marginLeft: ".5rem", color: "red", fontWeight: "lighter"}} id='errorSide'><em>({ errors.firstName})</em></div>}
</label></div>
                <div><input size="70" placeholder='Please write your first name...' className='form-control' value={values.firstName} id="firstName" name="firstName" onChange={handleChange("firstName")} disabled={isSubmitting} onBlur={handleBlur("firstName")}/></div>
                <br />                
              </div>
              {/* LASTNAME */}
              <div>
                <div><label className='labelHeader' htmlFor="lastName">*Last Name{errors.lastName && touched.lastName && <div style={{marginLeft: ".5rem", color: "red", fontWeight: "lighter"}} id='errorSide'><em>({ errors.lastName})</em></div>}</label></div>
                <div><input placeholder='Please write your last name...' className='form-control' value={values.lastName} id="lastName" name="lastName" onChange={handleChange("lastName")} disabled={isSubmitting} onBlur={handleBlur("lastName")}/></div>
              </div>
              {/* GENDER */}
              <div id='genderChoose'>
                <div><label className='labelHeader' htmlFor="gender">Gender</label></div>
                <div>
                  <input id='male' type="radio" name='gender' value="male" onChange={handleChange("gender")} checked={values.gender === "male"} disabled={isSubmitting}/>
                  <label style={{width: "7rem"}} htmlFor="male">Male</label>

                  <input id='female' type="radio" name='gender' value="female" onChange={handleChange("gender")} checked={values.gender === "female"} disabled={isSubmitting}/>
                  <label style={{width: "7rem"}} htmlFor="female">Female</label>
                </div>
              </div>
              {/* EMAIL */}
              <div>
                <div><label className='labelHeader' htmlFor="email">*E-mail{errors.email && touched.email && <div style={{marginLeft: ".5rem", color: "red", fontWeight: "lighter"}} id='errorSide'><em>({ errors.email})</em></div>}</label></div>
                <div><input placeholder='test@test.com' className='form-control' value={values.email} id="email" name="email" onChange={handleChange("email")} disabled={isSubmitting} onBlur={handleBlur("email")}/></div>
              </div>

              <div style={{display: "flex"}}>
                <div className='labelHeader' style={{display: "flex", flexDirection:"column"}}>
                  <label htmlFor="">Date</label>
                  <input style={{textAlign: "center"}} id='birthOfDate' type="date" onChange={handleChange("birthOfDate")} value={values.birthOfDate} disabled={isSubmitting} required/>
                </div>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginLeft: "auto", marginRight: "1.5rem"}}>
                  <label className='labelHeader' htmlFor="">Pozition</label>
                  <div>
                  <div style={{justifyContent:"space-between"}}>
                    


                  <input id='Back-end' type="checkbox" name='pozition' value="Back-end" onChange={handleChange("pozition")} disabled={isSubmitting}
                    checked={!!values?.pozition?.includes("Back-end")} />
                  <label style={{marginRight:"1rem"}} htmlFor="Back-end">Back-End</label>
                  


                  <input id='Front-end' type="checkbox" name='pozition' value="Front-end" onChange={handleChange("pozition")} disabled={isSubmitting}
                    checked={!!values?.pozition?.includes("Front-end")} />
                  <label style={{marginRight:"1rem"}} htmlFor="Front-end">Front-End</label>
                  


                  
                  <input id='Data' type="checkbox" name='pozition' value="Data" onChange={handleChange("pozition")} disabled={isSubmitting}
                    checked={!!values?.pozition?.includes("Data")} />
                  <label htmlFor="Data">Data</label>
                  </div>
                  
                  


                  <div style={{justifyContent:"space-between"}}>
                  <input id='Game' type="checkbox" name='pozition' value="Game" onChange={handleChange("pozition")} disabled={isSubmitting}
                    checked={!!values?.pozition?.includes("Game")} />
                  <label style={{marginRight:"1rem"}} htmlFor="Game">Game</label>
                  
                  


                  <input id='Mobile' type="checkbox" name='pozition' value="Mobile" onChange={handleChange("pozition")} disabled={isSubmitting}
                    checked={!!values?.pozition?.includes("Mobile")} />
                  <label style={{marginRight:"1rem"}} htmlFor="Mobile">Mobile</label>
                  
                  


                  <input id='Others' type="checkbox" name='pozition' value="Others" onChange={handleChange("pozition")} disabled={isSubmitting}
                    checked={!!values?.pozition?.includes("Others")} />
                  <label htmlFor="Others">Others ...</label>


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
                  <label className='labelHeader' style={{ display: "flex", marginBottom: "-1rem", fontSize: "1.1rem", fontWeight: "700", width: "17rem" }} htmlFor="school">University</label>
                  <br />
                  <select required className='form-control' name="school" id="school" value={values.school} onChange={handleChange("school")} disabled={isSubmitting}>
                    <option value="not specified">-</option>
                    <option value="IstanbulAydinUniversity">Istanbul Aydin University</option>
                    <option value="GalatasarayUniversity">Galatasaray University</option>
                    <option value="IstanbulIsikUniversity">Istanbul Isik University</option>
                    <option value="OkanUniveristy">Okan University</option>
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
                    <option value="InformationSecurityTechnology">Information Security Technology</option>
                    <option value="SoftwareDeveloper">Software Developer</option>
                  </select>
                </div>
              </div>


              {/* SALARY */}
              <div>
                <div><label className='labelHeader' htmlFor="salary">Salary Expectation</label></div>
                <div>
                  <select className='form-control' name="salary" id="salary" onChange={handleChange("salary")} value={values.salary} disabled={isSubmitting}>
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
              {/* CHALLENGES challengeComment */}
              <div>
                <div><label className='labelHeader' htmlFor="challengeComment">*Comment About Challenges{errors.challengeComment && touched.challengeComment && <div style={{marginLeft: ".5rem", color: "red", fontWeight: "lighter"}} id='errorSide'><em>({ errors.challengeComment})</em></div>}</label></div>
                <div><textarea style={{ width: "100%", height: "10vh", resize: "none", padding: ".2rem" }} name="challengeComment" id="challengeComment" onChange={handleChange("challengeComment")} onBlur={handleBlur("challengeComment")} placeholder={values.challenges && values.challenges} value={values.challengeComment} disabled={isSubmitting}></textarea></div>
              </div>
              {/* HELP */}
              <div>
                <div><label className='labelHeader' htmlFor="help">*Would you like to get help with this? How?{errors.help && touched.help && <div style={{marginLeft: ".5rem", color: "red", fontWeight: "lighter"}} id='errorSide'><em>({ errors.help})</em></div>}</label></div>
                <div><textarea style={{ width: "100%", height: "10vh", resize: "none", padding: ".2rem" }} name="help" id="help" onChange={handleChange("help")} value={values.help} disabled={isSubmitting} onBlur={handleBlur("help")} placeholder="I need help..."></textarea></div>
              </div>
              {/* BUTTONS */}
              <div style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}>
              
              
              <div id='submitReset'>
              <button type='submit' className='btn btn-success'><strong>Submit</strong></button>
              <button type='reset' className='btn btn-danger'><strong>Reset</strong></button>
              </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default NewForm