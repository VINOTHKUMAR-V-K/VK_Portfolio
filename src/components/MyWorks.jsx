import React from 'react'
import '../styles/mywork.css'
import port from '../asserts/prot.png';
import food from '../asserts/food.jpg';
import hotstar from '../asserts/hotstar.jpeg'
const MyWorks = () => {
  return (
    <div>
        <div>
            <div className='d-flex portfolio'>
              <img src={port} alt="portfolio" height={"200px"} width={"350px"} className='border border-5 border-danger '/>

              <div className='px-5'>
              <h1 className='header'>PortFolio Website</h1>
                <p className='describe'>Developed a responsive and interactive portfolio website using HTML, CSS, Bootstrap, and React. This project demonstrates my skills in front-end web development and showcases my ability to create visually appealing, user-friendly web applications.</p>
              </div>
            </div>
            <hr style={{ height: "4px", color: "gray", width: "70%", margin: "auto"}} />
            <div className='d-flex portfolio'>
              <div className='px-5'>
              <h1 className='header'>Online Food Order Website</h1>
                <p className='describe'>The MERN stack-based food ordering website is a robust and user-friendly platform designed to streamline the process of ordering food online. Leveraging the power of MongoDB for data storage, Express.js for the backend, React for the frontend, and Node.js for server-side operations, this website offers a seamless and interactive experience for both customers and restaurant owners.</p>
              </div>
              <img src={food} alt="portfolio" height={"200px"} width={"350px"} className='border border-5 border-danger '/>
            </div>
            <hr style={{ height: "4px", color: "gray", width: "70%", margin: "auto"}} />
            <div className='d-flex portfolio'>
              <img src={hotstar} alt="portfolio" height={"200px"} width={"350px"} className='border border-5 border-danger '/>

              <div className='px-5'>
              <h1 className='header'>Hotstar-Clone Website</h1>
                <p className='describe'>The Hotstar clone website is a project that I developed using React, HTML, CSS, and Bootstrap, aiming to replicate the user interface and functionalities of the popular streaming platform, Hotstar. This project demonstrates my proficiency in frontend development and recreates the essential features of the original Hotstar website.</p>
              </div>
            </div>
            <hr style={{ height: "4px", color: "gray", width: "90%", margin: "auto"}} />
        </div>
        <br />
    </div>
  )
}

export default MyWorks