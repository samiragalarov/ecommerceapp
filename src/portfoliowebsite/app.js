import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightheme, darktheme, GlobalStyles } from "./theme.js"
import "./website.css"
import image2 from "./imgs/sekil2.png"
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";




import Skill from './skill.js'


window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop === 350 ) {
    console.log('dsckm')
  } 
}
const StyledApp = styled.div`
    color: ${(props) => props.theme.fontcolor}
`
let aboutbul = false

const App = () => {


    const [theme, settheme] = useState('light')
    const [nav,setnav]=useState('white')
    const themeToggler = () => {
        theme === 'light' ? settheme('dark') : settheme('light')

        ////
        if (aboutbul == false) {
            const about = document.getElementById("about").classList.add('deyis')
            aboutbul = true


        } else {
            const about = document.getElementById("about").classList.remove('deyis')
            aboutbul = false


        }
        ////
        if(nav == "white"){
            document.querySelector('.navbar').classList.add("changenav")
            setnav('black')
        }
        else{
            document.querySelector('.navbar').classList.remove("changenav")
            setnav('white')

        }

    }
    return (

        <ThemeProvider theme={theme === 'light' ? lightheme : darktheme}>
            <GlobalStyles />
            <div className='container'>

                <div className='navbar'>
                    <div className="logo">
                        <StyledApp><h4 style={{ fontWeight: '1600', fontSize: '30px', marginLeft: '200px' }}>Aghalarov<span style={{ color: '#1890ff' }}>samir</span> </h4></StyledApp>
                    </div>
                    <div className="links">
                        <StyledApp>
                            <h4>HOME</h4>

                        </StyledApp>
                        <StyledApp>
                            <h4>SKILLS</h4>


                        </StyledApp>
                        <StyledApp>
                            <h4>PROJECTS</h4>

                        </StyledApp>
                        <StyledApp>
                            <h4>CONTACT</h4>

                        </StyledApp>
                        <div className='darkcontainer'>
                            <button onClick={() => {
                                themeToggler()
                            }}>click</button>




                        </div>





                    </div>





                </div>

                <div className='main'>
                    <div className="mainpart1">
                        <div className="mainname">
                            <StyledApp><h1 style={{ fontSize: "50px" }}>Hi I'm Samir</h1></StyledApp>

                        </div>
                        <div className="mainbio">
                            <StyledApp><p style={{marginRight:"20px"}}>I love writing code. I believe in the power of programming to transform and improve the lives of people around the world.</p></StyledApp>

                        </div>
                        <div className="mainbtn">
                            <div className="maintn1">
                                <h3 style={{ color: 'white' }}>Hire me</h3>

                            </div>
                            <div className="mainbtn2">
                                <StyledApp><h3>Download Cv</h3></StyledApp>

                            </div>

                        </div>




                    </div>
                    <div className="mainpart2">
                        <img src={image2} />



                    </div>



                </div>

                <div className="about">

                    <div className="about1">
                        <div id="about" className="aboutme1">
                            <StyledApp>
                                <h3 style={{ textDecorationLine: 'underline', marginBottom: '19px' }}>Personal Details</h3>
                                <p style={{ marginBottom: '7px' }} >
                                    Email:
                                </p>
                                <p style={{ marginBottom: '7px' }}>
                                    Shravanmeena47@gmail.com
                                </p>
                                <p style={{ marginBottom: '7px' }}>
                                    Languages: English & Hindi
                                </p>
                                <p style={{ marginBottom: '7px' }}>
                                    Nationality: Indian
                                </p>
                            </StyledApp>


                        </div>

                    </div>
                    <div className="about2">
                        <div className="aboutme2">
                            <StyledApp>

                                <h1 style={{ marginLeft: '2%' }} className="abouthed">
                                    I Am Full Stack Developer |

                                </h1>
                                <p style={{ marginLeft: '2%' }}>
                                    I am passionate about using latest Technology. It is all of experience just because I love developing Apps and learn new technologies
                                    I keep things simple, clean and efficient.
                                </p>
                            </StyledApp>

                        </div>


                    </div>


                </div>

                <div className='skill'>
                    <div className="skillcon">
                        <div className="skilltext">
                            <div className="skilltexthead">
                                <StyledApp>
                                    <h1>Skills & Expertise</h1>
                                </StyledApp>

                            </div>
                            <div className="skilltextbottom">
                                <StyledApp>
                                    <p style={{ textAlign: "center" }}>My specialties include quickly learning new skills and programming languages,
                                        problem-solving, responsive design principles,
                                        website optimization. So far I have MonngoDb, Express, React,
                                        Node, javascript and Git/GitHub under my belt.
                                    </p>
                                </StyledApp>

                            </div>




                        </div>
                        <div className="skillbox">
                            <div className='skilboxitem'>
                                <Skill lan="Html" value={20} meter="0.8"  />

                            </div>
                            <div className='skilboxitem'>
                                <Skill lan="Css" meter="0.7" />

                            </div>
                            <div className='skilboxitem'>
                                <Skill lan= "Js" meter="0.8"/>

                            </div>
                            <div className='skilboxitem'>
                                <Skill lan="React" />

                            </div>
                            <div className='skilboxitem'>
                                <Skill lan="Git" />

                            </div>
                            <div className='skilboxitem'>
                                <Skill lan="jquery" />

                            </div>





                        </div>

                    </div>


                </div>
                <div className='portfolio'>
                    <div className='portfolioinner'>
                        <div className="portfoliotext">
                            <div className="portfoliotextinner">
                                <StyledApp>
                                    <h1 style={{ textAlign: 'center' }}>My Work & Portfolio</h1>
                                    <p style={{ textAlign: 'center' }}>Take a moment to view some of my latest projects.
                                        While most of the project below were built by me from the ground up.
                                    </p>
                                </StyledApp>

                            </div>

                        </div>
                        <div className="portfoliocards">
                            <div className="portfoliocardsitem">
                                <div className="cardinner">
                                    <div className="cardimg">
                                        <img src={image2} />

                                    </div>




                                    <div className="cardhover">
                                        <h1 style={{ color: 'white', opacity: '1' }} >code</h1>
                                        <h1 style={{ color: 'white' }} >live</h1>

                                    </div>




                                </div>

                            </div>
                            <div className="portfoliocardsitem">
                                <div className="cardinner">
                                    <div className="cardimg">
                                        <img src={image2} />

                                    </div>




                                    <div className="cardhover">
                                        <h1 style={{ color: 'white', opacity: '1' }} >code</h1>
                                        <h1 style={{ color: 'white' }} >live</h1>


                                    </div>

                                </div>

                            </div>
                            <div className="portfoliocardsitem">
                                <div className="cardinner">
                                    <div className="cardimg">
                                        <img src={image2} />

                                    </div>




                                    <div className="cardhover">
                                        <h1 style={{ color: 'white', opacity: '1' }} >code</h1>
                                        <h1 style={{ color: 'white' }} >live</h1>

                                    </div>

                                </div>

                            </div>

                            <div className="portfoliocardsitem">
                                <div className="cardinner">
                                    <div className="cardimg">
                                        <img src={image2} />

                                    </div>




                                    <div className="cardhover">
                                        <h1 style={{ color: 'white', opacity: '1' }} >code</h1>
                                        <h1 style={{ color: 'white' }} >live</h1>

                                    </div>


                                </div>

                            </div>
                            <div className="portfoliocardsitem">
                                <div className="cardinner">
                                    <div className="cardimg">
                                        <img src={image2} />

                                    </div>




                                    <div className="cardhover">
                                        <h1 style={{ color: 'white', opacity: '1' }} >code</h1>
                                        <h1 style={{ color: 'white' }} >live</h1>

                                    </div>


                                </div>

                            </div>
                            <div className="portfoliocardsitem">
                                <div className="cardinner">
                                    <div className="cardimg">
                                        <img src={image2} />

                                    </div>




                                    <div className="cardhover">
                                        <h1 style={{ color: 'white', opacity: '1' }} >code</h1>
                                        <h1 style={{ color: 'white' }} >live</h1>

                                    </div>


                                </div>

                            </div>

                        </div>



                    </div>
                    <div className="visit">

                        <div className="github">
                            <p style={{ marginRight: '20px', fontWeight: 'bold' }}>Git hub</p> <DiGithubBadge size={40} />



                        </div>
                        <div className="linkdin">
                            <p style={{ marginRight: '20px', fontWeight: 'bold' }}>Linkdin</p> <AiFillLinkedin size={40} color='#2867B2' />


                        </div>



                    </div>



                </div>
                <div className="contact">
                    <div className="contactinner">
                        <div className="contacthead">
                            <StyledApp><h1>Contact Me</h1></StyledApp>

                        </div>
                        <div className="contacttext">
                            <div className="contacttextinner">
                                <StyledApp><p style={{ textAlign: 'center', height: '20%' }}>I'm happy to answer any question you have or provide an estimate. Just send me a message in the form below with any questions you may have.</p></StyledApp>

                            </div>


                        </div>
                        <div className="gmailgroup">
                            <div className="phoene goupitem1">
                                <div className="innergmail">
                                    <div className="phonelogo">
                                        <AiOutlinePhone color={"#1488f5"} size={55} />

                                    </div>
                                    <StyledApp>

                                        <p style={{ fontWeight: "900", fontSize: '20px' }}>Phone</p>
                                    </StyledApp>
                                    <StyledApp>

                                        <p>Let's have a call</p>
                                    </StyledApp>
                                    <StyledApp>
                                        <p style={{ color: '#1890ff', fontWeight: 'bold' }}>7467816084</p>
                                    </StyledApp>

                                </div>



                            </div>
                            <div className="email goupitem1">
                                <div className="innergmail">
                                    <div className="phonelogo">
                                        <AiOutlineMail color={"#1488f5"} size={55} />

                                    </div>
                                    <StyledApp>
                                        <p style={{ fontWeight: "900", fontSize: '20px' }}>Email</p>

                                    </StyledApp>



                                    <StyledApp>
                                        <p>Drop me a line</p>


                                    </StyledApp>
                                    <StyledApp>
                                        <p style={{ color: '#1890ff', fontWeight: 'bold' }}>Shravanmeena47@gmail.com</p>
                                    </StyledApp>
                                </div>

                            </div>
                            <div className="Location goupitem1">
                                <div className="innergmail">
                                    <div className="phonelogo">
                                        <GoLocation color={"#1488f5"} size={55} />

                                    </div>
                                    <StyledApp>
                                        <p style={{ fontWeight: "900", fontSize: '20px' }}>Location</p>
                                    </StyledApp>
                                    <StyledApp>
                                        <p>Jaipur, Rajasthan</p>
                                    </StyledApp>
                                    <StyledApp >
                               
                                        <p style={{ color: '#1890ff', fontWeight: 'bold' }}>View on map</p>
                                    </StyledApp>
                                </div>

                            </div>


                        </div>
                        <div className="messageme">
                            <div className="innermessage">
                                <div className="messageme1">
                                    <div className="innermessageme1">
                                        <input className="input1" placeholder="First Name" />
                                        <input className="input1" placeholder="Your Email" />
                                        <input className="input1" placeholder="Yoursubject" />

                                    </div>


                                </div>
                                <div className="messageme2">
                                    <div className="innermessageme2">
                                        <textarea  placeholder="Your message" className="input2">

                                        </textarea>

                                    </div>

                                </div>

                            </div>


                        </div>
                        <div className="messagebutton">
                            <div className="messagebuttoninner">
                                <h3 style={{ color: 'white' }}>Send Message</h3>

                            </div>


                        </div>



                    </div>



                </div>
                <div className='footer'>

                </div>

            </div>
        </ThemeProvider>

    )



}
export default App