import "./HP_main.css"
import NavBar from "./NAVBAR/NavBar.jsx"
import SlideShow from "./SLIDESHOW/SlideShow.jsx"

const HP_main = () => {
    return(<>
        <div id = "Layout">
            <div className = "Pg first">
                <SlideShow>
                </SlideShow>
            </div>
            <div className = "Pg second"></div>
            <div className = "Pg third"></div>
        </div>

    </>)
}

export default HP_main;