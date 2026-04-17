import {useState} from 'react'
import './NavBarDesk.css'

function NavBar_Desktop(){
    const [HamMenu, setHam] = useState(false);
    const [dropItem, setItem] = useState(null)
    const navItems = ["We", "Services", "Insights", "Connect"]

    const setHamval = () => {setHam(!HamMenu)}
    return (
        <>
            <div className={`overlay ${HamMenu ? 'active' : ' '}` } onClick = {setHamval}></div>
            <div className="Nav">
                <img src="/logo.png" alt="" className="NavLogo"/>

                <div className="ham" onClick = {setHamval}>
                    <span className={`hamL ${HamMenu ? 'active' : ' '}`}></span>
                    <span className={`hamL ${HamMenu ? 'active' : ' '}`}></span>
                    <span className={`hamL ${HamMenu ? 'active' : ' '}`}></span>
                </div>

                <section className={`con2 ${HamMenu ? 'active' : ' '}`}>
                    <div className="eleCon">
                        <ul className="links">
                            {navItems.map(item => (
                                <li className={`linkEle ${dropItem === item ? "up" : ""}`} onClick = {() => setItem(dropItem === item ? null : item)}>{item} <span className={`arrow ${dropItem === item ? "up" : ''}`}>⌄</span></li>
                            ))}
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