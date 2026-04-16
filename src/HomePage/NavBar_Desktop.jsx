import {useState} from 'react'
import './NavBarDesk.css'

function NavBar_Desktop(){
    return (
        <>
            <div className="Nav">
                <img src="/logo.png" alt="" className="NavLogo"/>

                <div className="ham">
                    <span className="hamL"></span>
                    <span className="hamL"></span>
                    <span  className="hamL"></span>
                </div>

                <section className="con2">
                    <div className="eleCon">
                        <ul className="links">
                            <li className="linkEle">We <span className="arrow">⌄</span></li>
                            <li className="linkEle">Services <span className="arrow">⌄</span></li>
                            <li className="linkEle">Insights <span className="arrow">⌄</span></li>
                            <li className="linkEle">Connect</li>
                        </ul>
                    </div>
                    <div className="eleCon">
                        <button className="AuthBtn">Log-in</button>
                        <button className="AuthBtn">Sign-Up</button>
                    </div>
                </section>
            </div>
        </>
    )
}

export default NavBar_Desktop;