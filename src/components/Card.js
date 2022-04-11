import { Data } from '../Stuff';
import { useEffect } from 'react'; 
import AOS from "aos";
import "aos/dist/aos.css";

const Card = () => {

    useEffect(() => {
        AOS.init(
            {
            once: true
    }
        );
        AOS.refresh();
      }, []);
    return(
        <div className="offers">
            <h1 data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">explore our latest offers</h1>
            <div className="card">
            {Data.map( (card, index)=> {
              return(
              <div className="cardCon" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500" key={index}>
                <img src={card.image} alt="" className="img"/>
                <div className="textCon">
                <p className="text">{card.text}</p>
                <button className="btn">{card.button}</button>
                </div>
              </div>
              )
            })}
            </div>
            <hr/>
        </div>
    )
}

export default Card;
