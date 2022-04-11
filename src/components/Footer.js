import { FaCcMastercard } from "react-icons/fa";
import {FaCcPaypal} from "react-icons/fa";
import { FaAmazonPay } from "react-icons/fa";
import {FaAviato} from "react-icons/fa"; 
import { FaCcVisa} from "react-icons/fa";
import {FaCcStripe} from "react-icons/fa";

const Footer = () => {
    return(
        <div className="footer">
        <div className="brandClass">
           <FaCcMastercard className="brandicons"/>
           <FaCcPaypal  className="brandicons"/>
           <FaAviato className="brandicons"/>
           <FaAmazonPay className="brandicons"/>
           <FaCcVisa className="brandicons"/>
           <FaCcStripe className="brandicons"/>
        </div>
        <div>
          <p className="jdev">&copy;Jdev.com 2022</p>
        </div>
        </div>
    )
}

export default Footer;