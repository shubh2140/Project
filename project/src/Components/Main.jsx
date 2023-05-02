import { Link } from "react-router-dom";
import style from "../Css/main.module.css"
import Image1 from "../Images/Image1.jpg"
import Image2 from "../Images/Image2.jpg"
import Image3 from "../Images/Image3.jpg"
import Image4 from "../Images/Image4.jpg"
const Main=()=>{
    return(
        <div id={style.mainBox}>
            <div className={style.box1}>
                <Link to="/"><img src={Image1} alt="" /></Link>
            </div>
            <div className={style.box1}>
                <Link to="/pic2"><img src={Image2} alt="" /></Link>
            </div>
            <div className={style.box1}>
                <Link to="/pic3"><img src={Image3} alt="" /></Link>
            </div>
            <div className={style.box1}>
                <Link to="/pic4"><img src={Image4} alt="" /></Link>
            </div>
        </div>
    )
}
export default Main;