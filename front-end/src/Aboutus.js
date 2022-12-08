import './Aboutus.css';

const Aboutus = props =>{
    return(
        <about>
        <h1 className='h1-about'>About Us</h1>
        <p1 className="p1-about">We are a team of NYU students aiming to build a community for the artists on campus. 
        Come share your creativity and connect with your fellow artist!
        </p1>
        <p></p>
        <p1 className="p1-about">Send us an email if you have any questions.</p1>
        <gall className='gallery-about'>
          <a ><img src={"http://localhost:3001/static/creators/Genie.jpg"}/>
          <p></p>
          <p>Genie Hou</p>
          <p>ch3801@nyu.edu</p>
          </a>
          <a ><img src={"http://localhost:3001/static/creators/Isabel.jpeg"}/>
          <p></p>
          <p>Isabel Chen</p>
          <p>igc234@nyu.edu</p>
          </a>
          <a ><img src={"http://localhost:3001/static/creators/Derek.jpg"}/>
          <p></p>
          <p>Derek Han</p>
          <p>swh376@nyu.edu</p>
          </a>
          <a ><img src={"http://localhost:3001/static/creators/Joseph.jpeg"}/>
          <p></p>
          <p>Joseph Yusufov</p>
          <p>jey2011@nyu.edu</p>
          </a>
        </gall></about>
    )
};

export default Aboutus;
