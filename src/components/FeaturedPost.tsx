import "./FeaturedPost.css"
import {Link} from 'react-router-dom'
function FeaturedPost(){
    return <div className = "container">
        <div id="featuredPost">
            <div className="mainArticleBox">
            <Link to ="/About" className="link">
                <h1 className="mainArticleTitle">About Albert Yang: 1B UW CS</h1>
                <p className="lead my-3">Hi! I'm currently a 1B University of Waterloo CS Student. This article will be talking about me and the purposes of this website. </p>
                <p className="lead mb-0"><a id = "continueread">Continue reading...</a>
                </p>
            </Link>
            </div>
        </div>
    </div>;
}

export default FeaturedPost;