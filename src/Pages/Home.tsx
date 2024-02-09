import Header from '../components/Header'
import Line1 from '../components/Line1'
import TitleNav from '../components/NavbarTitle'
import FeaturedPost from '../components/FeaturedPost'
import ProScroldiv from '../components/ProjectScrollWheel'
import Mainpage from '../components/Mainpage'
import { Link } from "react-router-dom"

function Home(){
  return (
    <>
    <div> <Header></Header></div>
    <div> <Line1></Line1> </div>
    <div> <TitleNav></TitleNav></div>
    <div> <Line1></Line1> </div>
    <div> <FeaturedPost></FeaturedPost></div>
    <div> <Line1></Line1> </div>
    <div> <ProScroldiv></ProScroldiv></div>
    <div> <Line1></Line1> </div>
    <div> <Mainpage></Mainpage></div>

    </>)
    


}

export default Home;