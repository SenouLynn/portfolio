import React from 'react'
import { useState } from 'react'
import { Sling as Hamburger } from 'hamburger-react'

export default function Nav() {
    //Hamburger Menu State
    const [isOpen, setOpen] = useState(false)

    //Modal Nav Opening => Add Class on BurgerClick
    let navHomeToggle;
    let navAboutToggle;
    let navTechToggle;
    let navPastWorkToggle;
    let navResumeToggle;
    let navContactToggle;
    // let classNames = ["home", "about-me", "tech-exp", "past-work", "resume", "contact"]

    if(isOpen){
        navHomeToggle = "navOpen--home";
        navAboutToggle = "navOpen--about-me"
        navTechToggle = "navOpen--tech-exp"
        navPastWorkToggle = "navOpen--past-work"
        navResumeToggle = "navOpen--resume"
        navContactToggle = "navOpen--contact"

    }else{
        navHomeToggle = "navClosed--home";
        navAboutToggle = "navClosed--about-me"
        navTechToggle = "navClosed--tech-exp"
        navPastWorkToggle = "navClosed--past-work"
        navResumeToggle = "navClosed--resume"
        navContactToggle = "navClosed--contact"
    }

    return (
        <div id="navbar">
            <nav>
                <div className="nav-burger"><Hamburger className="nav-burger" toggled={isOpen} toggle={setOpen} /></div>
                <div className="nav-links"> 
                    <div className={`${navHomeToggle}`}><a href="#home"><h4>Home</h4></a></div>
                    <div className={`${navAboutToggle}`}><a href="#about-me"><h4>About Me</h4></a></div>
                    <div className={`${navTechToggle}`}><a href="#skills"><h4>Tech. Exp.</h4></a></div>
                    <div className={`${navPastWorkToggle}`}><a href="#past-work"><h4>Past Work</h4></a></div>
                    <div className={`${navResumeToggle}`}><a href="#resume"><h4>Resume</h4></a></div>
                    <div className={`${navContactToggle}`}><a href="#contact"><h4>Contact</h4></a></div>
                </div>
            </nav>
        </div>
    )
}
