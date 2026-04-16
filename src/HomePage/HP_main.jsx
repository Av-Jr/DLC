import "./HP_main.css"
import NavBar_Desktop from "./NavBar_Desktop.jsx"

const HP_main = () => {
    return(<>
        <div id = "Layout">
            <div className = "Pg first">
                <NavBar_Desktop></NavBar_Desktop>
            </div>
            <div className = "Pg second"></div>
            <div className = "Pg third"></div>
        </div>

    </>)
}

export default HP_main;