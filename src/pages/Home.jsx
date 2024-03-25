
import "../css/home.css"
import Header from "../components/Header";
import banner from "../images/banner.jpg"


const Home = () => {
    return ( 
        
      <>
      <Header></Header>

    <div className="hero">
      <div className="heroText">
        <h1>Discover the perfect for furniture .</h1>
      </div>
      <div className="heroSideText">
        <hr />
        <p className="normaltext">Working from home? Our furniture will enhance your comfort and make your space more inviting</p>

        <p className="shopbtn">Shop Now</p>
      </div>
       
    
    </div>

    <div className="banner">
      <img src={banner} alt="" />
    </div>
    </>
     );
}
 
export default Home;