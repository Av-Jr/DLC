import "./SlideShow.css"
import NavBar from '../NAVBAR/NavBar.jsx'

const SlideShow = () => {
    return(
        <div className="mainCon">
            <NavBar></NavBar>
            <div className="imgCon">
                <div className="imgCon1">
                    <div className="TextPart">
                        <div className="quoteBox">
                            <span className="quoteLine">Building Wealth,</span>
                            <span className="quoteLine">Preserving Legacies.</span>
                        </div>
                        <div className="buttonBox">
                            <button className="HPbtns">Learning</button>
                            <button className="HPbtns">Book My Appointment</button>
                        </div>
                    </div>
                    <div className="TextPart2">
                        <img src="/HP3.png" alt="" className="frstImg"/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SlideShow;