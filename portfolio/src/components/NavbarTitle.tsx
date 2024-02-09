import './NavbarTitle.css'
import {Link} from "react-router-dom"
function TitleNav(){
    return (
        <div className = "container">
    <div className="nav-title">
        <nav className="nav-title">
            <Link to ="/" className="link">Home</Link>
            <Link to ="/About" className="link">About</Link>
            <Link to ="/Projects" className="link">Projects</Link>
            <Link to ="/Resume" className="link">Resume</Link>


        </nav>
    
  </div>
  </div>)
}
/*           <Link to ="/Resume" className="link">Food Reviews</Link>
<Link to ="/Resume" className="link">Recipes</Link>
<Link to ="/Resume" className="link">Misc</Link>
<Link to ="/Resume" className="link">Contact</Link>*/
export default TitleNav;