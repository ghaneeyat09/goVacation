import {GiHamburgerMenu} from "react-icons/gi";
import Logo from "./Logo";
const Nav = ({changeStat}) =>{

    return(
        <div className="nav">
            <Logo />
            <ul>
                <li>flights</li>
                <li>hotel</li>
                <li>flights + hotel</li>
                <li>self catering</li>
                <li>continental</li>
                <li>hot deals</li>
                <li>vacation</li>
                <li>places</li>
                <li>blog</li>
            </ul>
            <GiHamburgerMenu className="hmbm" onClick={changeStat}/>
        </div>
    )
}

export default Nav;