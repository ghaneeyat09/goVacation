import { Dests } from "../Stuff";
import { MdAirplanemodeActive } from "react-icons/md";
import {GiCargoShip} from "react-icons/gi"
import { useState, useEffect } from 'react'; 
import AOS from "aos";
import "aos/dist/aos.css";
const Destination = () => {
// const [filtered, setFiltered] = useState([]);
const [destinations, setDestinations] = useState([]);
let [inpValue, setInpValue] = useState("");

    const handleChange = (e) => {
        setInpValue(e.target.value)
    }
   
    useEffect(() => {
        console.log(inpValue);
        const filt = Dests.filter((dest) => dest.city.includes(inpValue.toLowerCase()));
        console.log(filt)
        setDestinations(filt)
    }, [inpValue])
    useEffect(() => {
        setDestinations(Dests)
        AOS.init(
            {
            delay: 0,
            once: true
    }
        );
        AOS.refresh();
      }, []);
    return(
        <div className="destCon">
            <h1 data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">top destinations around the world</h1>
            <input placeholder="look for the place to spend your next vacation" onChange={handleChange}  value={inpValue} type="text" className="dest-input"/>
            <div className="destWrapper">
            {
                destinations.map( (dest, index) => {
                    return(
                        <div className="dest" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1000" key={index}>
                            <div className="imgCont" >
                               <img src={dest.image} alt="" className="destImg"/>
                            </div>
                            <div className="flex flex1">
                                <span className="city">{dest.city}</span>
                                <button>{dest.button}</button>
                            </div>
                            <div className="flex flex2">
                                <span>< GiCargoShip className="ship"/>{dest.ship}</span>
                                <span>< MdAirplanemodeActive className="plane"/>{dest.plane}</span>
                            </div>
                        </div>
                    )
                })
            }

           {/* { filtered &&
                 filtered.map( (dest, index) => {
                    return(
                        <div className="dest" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1000" key={index}>
                            <div className="imgCont" >
                               <img src={dest.image} alt="" className="destImg"/>
                            </div>
                            <div className="flex flex1">
                                <span className="city">{dest.city}</span>
                                <button>{dest.button}</button>
                            </div>
                            <div className="flex flex2">
                                <span>< GiCargoShip className="ship"/>{dest.ship}</span>
                                <span>< MdAirplanemodeActive className="plane"/>{dest.plane}</span>
                            </div>
                        </div>
                    )
                })
            } */}
            </div>
        </div>

    )
}

export default Destination;