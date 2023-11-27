import React from 'react'
import "../styles/main.css"
import developer from "../asserts/double-exposure-of-a-business-man-using-laptop-on-his-desk-front-view-office-background-realistic-image-ultra-hd-high-design-very-detailed-free-photo-removebg-preview.png"
import html from "../asserts/html.png"
import css from "../asserts/css3-logo.png"
import js from "../asserts/js.png"
import bootstrap from "../asserts/Bootstrap_logo.svg.png"
import nodejs from "../asserts/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e2a4242.1423638015246930701731-removebg-preview.png";
import express from "../asserts/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo-removebg-preview.png";
import react from "../asserts/react.png";
import mongodb from "../asserts/mongo.png"
import { ImgSlider } from './ImgSlider';
import { Contacts } from './Contacts';
import MyWorks from './MyWorks'


function Main() {
    return (
        <div>
            <div className='img-fluid bgimg'>
                <div className='d-flex'>
                    <span className='myname '>VINOTHKUMAR</span>
                    <nav className='navbar'>

                        <a href="#" className='font'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin linked" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>  LinkedIn</a>
                        <a href="#" className='font'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>  Github</a>
                        <a href="#my_work" className='font'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journals" viewBox="0 0 16 16">
                            <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" />
                            <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" />
                        </svg>  Projects</a>
                        <a href="#foot" className='font'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                        </svg>  Contacts</a>
                    </nav>
                </div>
                <hr style={{ height: "4px", color: "gray" }} />
                <div className='title'>
                    <div className='d-flex flex-row flex-wrap'>
                        <div>
                            <h1 className='intro m-auto'>I'm a ordinary Person...</h1>
                            <h2 className='intro py-4'>Web Developer</h2>
                            <span className='small-intro'>SOLVING BIG PROBLEMS FAILING A LOT ALONG THE WAY</span>
                        </div>
                        <img src={developer} alt="developer" className='image px-0' />
                    </div>
                    <br />
                    <div className='box'>
                        <p className='my-intro'>Hello, I'm Vinothkumar, a passionate web developer. <span>Fresher in web development, I specialize in MERN Stack Web Development, focusing on front-end, back-end, full-stack development. I thrive on translating complex ideas into user-friendly solutions. My passion lies in crafting clean, efficient code to create responsive and interactive websites/applications. Explore my portfolio to see some of my work or get in touch to discuss potential collaborations.</span> <qoute>Looking forward to connecting with you.</qoute> </p>
                    </div>
                </div>

                <hr style={{ height: "4px", color: "gray" }} />
                <div className='container'>
                    <div className='row'>
                        <div className='col-6 px-5 education'>
                            <h2 className='edu'>Education</h2>
                            <h3 className='clg'>SMS College of Arts & Science</h3>
                            <h4 className='course'>MSc Information Technology | 2023-2025</h4>
                            <br />
                            <h3 className='clg'>RVS College of Arts & Science</h3>
                            <h4 className='course'>BSc Information Technology | 2019-2022</h4>
                        </div>
                        <div className='col-6 px-5 roles'>
                            <h2 className='edu'>Roles</h2>
                            <h3 className='clg'>G-code Technologies</h3>
                            <h4 className='course'>XML Executive | Nov 2021-July 2022</h4>
                            <br />
                            <h3 className='clg'>Edureka Learning Center</h3>
                            <h4 className='course'>Adjunct Faculty | June 2023-Present</h4>
                        </div>
                    </div>
                </div>
                <br />
                <hr style={{ height: "4px", color: "gray", width: "80%", margin: "auto" }} />
                <div className='skills'>
                    <h1 className='intro ' >My Skills</h1>
                    <p className='skill_intro'>"I specialize in MERN (MongoDB, Express.js, React, Node.js) Stack development, a comprehensive set of technologies that I proficiently utilize to create robust and dynamic web applications. My experience with each component of the MERN Stack allows me to build scalable, efficient, and responsive applications, offering a seamless user experience."</p>
                    <div class="cards-list">
                        <div class="card 1">
                            <div class="card_image"> <img src={html} alt='html' /> </div>
                        </div>

                        <div class="card 2">
                            <div class="card_image">
                                <img src={css} alt='css' />
                            </div>
                            <div class="card_title title-white">

                            </div>
                        </div>

                        <div class="card 3">
                            <div class="card_image">
                                <img src={js} alt='javascript' />
                            </div>
                            <div class="card_title">

                            </div>
                        </div>

                        <div class="card 4">
                            <div class="card_image">
                                <img src={bootstrap} />
                            </div>
                        </div>

                    </div>
                    <div class="cards-list">
                        <div class="card 1">
                            <div class="card_image"> <img src={nodejs} /> </div>
                        </div>

                        <div class="card 2">
                            <div class="card_image">
                                <img src={express} />
                            </div>
                        </div>

                        <div class="card 3">
                            <div class="card_image">
                                <img src={mongodb} />
                            </div>
                        </div>

                        <div class="card 4">
                            <div class="card_image">
                                <img src={react} />
                            </div>
                        </div>

                    </div>
                    <hr style={{ height: "4px", color: "gray", width: "90%", margin: "auto" }} />
                    <br />
                </div>
                <div className='my_work m-auto text-center' id='my_work'>
                    <h1 className='intro ' >My Works</h1>
                    <hr style={{ height: "4px", color: "red", width: "40%", margin: "auto" }} />
                    <MyWorks />

                </div>

                <div className='img_slider'>
                    
                    <ImgSlider />
                </div>
                <br />
                <div className='footer' id='foot'>
                    <hr style={{ height: "4px", color: "gray", width: "90%", margin: "auto" }} />
                    <Contacts />
                </div>
            </div>
        </div>
    )
}

export default Main