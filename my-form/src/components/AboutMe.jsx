import React from 'react'



function AboutMe() {
  return (
      <div>
        <div className='aboutMe'>
          <div id='denedik' className="jumbotron col-sm-6">
            <h1 className="display-4"><strong><em>Hello, world!</em></strong></h1>
            <p className="lead"></p>
            <hr className=''/>
              <p style={{fontSize: "1.7rem"}}>
                <em>My name is <strong>Kaan Yardımcı</strong>. I am a 4th year <strong>Software Engineering</strong> student at <strong>Istanbul Aydin University</strong>. I'm improving on <strong>Web Develop (Front-End)</strong>. I designed this form using <strong style={{color: "red"}}>React.js, Router, Formik, Yup</strong> structures. I hope it has been a success project...</em>
              </p>
              
              
              <div className='links' style={{display:"flex" , justifyContent: "space-around", marginTop:"2.5rem"}}>


              <a href="https://www.linkedin.com/in/kaanyardimci/" target="_blank"><i id='linkedIn' class="fa-brands fa-linkedin-in fa-5x"></i></a>

              <a target="_blank" id='github' href="https://github.com/kaanyrd"><i id='gitHub' class="fa-brands fa-github fa-5x"></i></a>



              {/* <a target="_blank" href="https://www.linkedin.com/in/kaanyardimci/"><i id='linkedIn' style={{color:"#0961B8", border:"#0961B8 4px solid", padding: ".7rem", borderRadius: "10px"}} class="fa-brands fa-linkedin-in fa-4x"></i></a>
              
              <a target="_blank" href="https://github.com/kaanyrd"><i id='gitHub' style={{color:"#101113", border:"#101113 4px solid", padding: ".7rem", borderRadius: "10px"}} class="fa-brands fa-github fa-4x"></i></a> */}

              </div>
              {/* <button><i class="fa-brands fa-linkedin-in"></i></button> */}
          </div>
        </div>
      </div>
  )
}

export default AboutMe