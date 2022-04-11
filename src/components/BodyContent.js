import { useEffect } from 'react'; 
import AOS from "aos";
import "aos/dist/aos.css";
const BodyContent = () => {

    useEffect(() => {
        AOS.init(
            {
            delay: 3000,
            once: true
    }
        );
        AOS.refresh();
      }, []);
    return(
        <div className="bodyContent">
            <div className="buttons">
               <button
               data-aos="fade-up"
               data-aos-easing="ease-in-out"
               data-aos-duration="2000"
               >Last minute winter escape</button><br/>
               <button data-aos="fade-up"
               data-aos-easing="ease-in-out"
               data-aos-duration="2000"
               data-aos-delay="3000"
               >April 2022 holiday offers 50% off all unique opportunities to realize your dream</button>
            </div> 
            <div className="form" data-aos="fade-up"
               data-aos-easing="ease-in-out"
               data-aos-duration="3000"
               data-aos-delay="6000">
               <form>
                    <div className="what">
                       <h1><span>01</span>what?</h1>
                       <input type="checkbox" id="hotel"></input>
                       <label htmlFor="hotel">hotel</label><br/>
                       <input type="checkbox" id="flights"></input>
                       <label htmlFor="flights">flights</label><br/>
                       <input type="checkbox" id="handf"></input>
                       <label htmlFor="handf">hotel + flight</label><br/> 
                    </div>
                    <div className="where">
                       <h1><span>02</span>where?</h1>
                       <div className="block">
                         <label htmlFor="dest">your destination</label>
                         <input id="dest"></input>
                       </div>
                    </div>
                    <div className="when">
                        <h1><span>03</span>when?</h1>
                        <div className="when-when">
                            <div className="block">
                            <label htmlFor="checkin">check in date</label>
                            <input type="date" id="checkin"/>
                            </div>
                            <div className="block">
                            <label htmlFor="checkout">check in date</label>
                            <input type="date" id="checkout"/>
                            </div>
                        </div>
                    </div>
                    <div className="who">
                        <h1><span>04</span>who?</h1>
                        <div className="who-who">
                        <div className="block">
                        <label>Rooms</label>
                        <input type="number"/>
                        </div>
                        <div className="block">
                        <label>Adults</label>
                        <input type="number"/>
                        </div>
                        <div className="block">
                        <label>Children</label>
                        <input type="number"/>
                        </div>
                        </div>

                    </div>
    </form>
            </div>
        </div>
    )
}

export default BodyContent;