import './Aboutus.css';
import Genie from "./Genie.jpg"
import Derek from "./Derek.jpg"
import Joseph from "./Joseph.jpeg"
import Isabel from "./Isabel.jpeg"


const Aboutus=()=>{
    return(
        <about>
        <h1 className='h1-about'>About Us</h1>
        <gall className='gallery-about'>
          <a ><img src={Genie}/>

          <p></p>
          <artists>Genie Hou</artists>
          </a>
          <a ><img src={Isabel}/>
          <p></p>
          <artists>Isabel Chen</artists>
          </a>
          <a ><img src={Derek}/>
          <p></p>
          <artists>Derek Han</artists>
          </a>
          <a ><img src={Joseph}/>
          <p></p>
          <artists>Joseph Yusurof</artists>
          </a>
        </gall></about>
    )
};

export default Aboutus;
