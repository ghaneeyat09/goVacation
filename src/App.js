import Body from "./components/Body";
import Card from "./components/Card";
import Destination from "./components/Destinations";
import BookTravel from "./components/BookTravel";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import { useState } from "react";
import "./App.css";

function App(){
  const [stat, setStat] = useState(false);
  const changeStat = () => {
    setStat(!stat);
  }
  return(
    <div>
      <Body changeStat={changeStat}/>
      <Card />
      <Destination />
      <BookTravel />
      <Footer />
      <Menu classname={stat? "menuShow": "menuHide"}/>
    </div>
  )
}
export default App;