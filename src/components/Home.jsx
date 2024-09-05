import React, { useEffect, useRef } from 'react'
import pdf from "../pdf/resume.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js"

const Home = () => {
  const typedRef=useRef(null)
  useEffect(()=>{
    const options={
      strings:["Welcome to my profile", "My name is Jamana","I'm a Full Stack Developer","I'm a Web Designer"],
      typeSpeed:50,
      backSpeed:50,
      loop:true
    }

    const typed=new Typed(typedRef.current,options)
    return () =>{
      typed.destroy() 
    }

  },[])
  return (
   
    <>
     <div className="container home" id="home">
      <div className="left" 
      data-aos="fade-up-right" data-aos-duration="1000ms">
        <h1 ref={typedRef}></h1>
        <a href={pdf} download="Resume.pdf" className="btn btn-outline-warning my-3 py-2">Download Resume</a>
      </div>
      <div className="right">
        <div className="img" data-aos="fade-up-left" data-aos-duration="1000ms">
          <img src={hero.imgSrc} alt="hero" />
        </div>
      </div>
     </div>
    </>
  )
}

export default Home
