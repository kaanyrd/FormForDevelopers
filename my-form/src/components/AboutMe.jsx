import React from 'react'


function AboutMe() {
  return (
    <div classNameName='container'>
      <div classNameName='row'>
        <div className='aboutMe'>
          <div id='denedik' className="jumbotron col-sm-6">
            <h1 className="display-4"><strong>Hello, world!</strong></h1>
            <p className="lead"></p>
            <hr className=''/>
              <p style={{fontSize: "1.7rem"}}>I'm Kaan Yardimci. I am a 4th year software engineering student at Istanbul Aydın University. I'm improving on Web Develop / Front-End side. I designed this form using React.js, Router, Formik, Yup structures. I hope it has been a success project...</p>
              
              
              <div className='links' style={{display:"flex" , justifyContent: "space-around"}}>
              <a target="_blank" href="https://www.linkedin.com/in/kaanyardimci/"><i style={{color:"#0961B8", border:"#0961B8 4px solid", padding: ".7rem", borderRadius: "10px"}} class="fa-brands fa-linkedin-in fa-4x"></i></a>
              <a target="_blank" href="https://github.com/kaanyrd"><i style={{color:"#101113", border:"#101113 4px solid", padding: ".7rem", borderRadius: "10px"}} class="fa-brands fa-github fa-4x"></i></a>

              </div>
              {/* <button><i class="fa-brands fa-linkedin-in"></i></button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe