import { Pros } from "../Stuff";
import { useEffect } from 'react'; 
import AOS from "aos";
import "aos/dist/aos.css";
const BookTravel = () => {
    useEffect(() => {
        AOS.init(
            {
            delay: 0,
            once: true
    }
        );
        AOS.refresh();
      }, []);
    return(
        <div className="header">
            <h1  data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">why book your travel with GOVAC?</h1>
            <p  data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">Get in touch and let's help plan your perfect holiday</p>
            <div className="prosCon"  data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
                {Pros.map((Pro, index) => {
                   return(
                   <div className="pros" key={index}>
                    <div className="icon">
                       <i>{Pro.icon}</i>
                    </div>
                    <h2>{Pro.title}</h2>
                    <p>{Pro.text}</p>
                   </div>
                   )
                })}
            </div>
        </div>
    )
}

export default BookTravel;