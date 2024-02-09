import './Mainpage.css'
import Article from "./Article";

function Mainpage(){
    return(
    <div className = "container" id = "main">
        <div className = "mainPage">
            <div id = "mostrecent"><Article title = "First Blog" date = "8:53, Jan 19 2023" article = "this is my first article"></Article></div>
            <div className = "sideNav">
                <div className = "stockForcast"> Stock forcast coming soon!</div>

                <div className = "recent"> 
                <h3 id = "recentArticleTitle">MOST RECENT ARTICLES</h3>
                    <div className = "articlePreview">
                        <div className = "preview"></div>
                        <div className = "preTitle"></div>
                    </div>
                    <div className = "articlePreview">
                        <div className = "preview"></div>
                        <div className = "preTitle"></div>
                    </div>
                    <div className = "articlePreview">
                        <div className = "preview"></div>
                        <div className = "preTitle"></div>
                    </div>
                    <div className = "articlePreview">
                        <div className = "preview"></div>
                        <div className = "preTitle"></div>
                    </div>
                </div>
                <div className = "skills"> 
                <h3 className = "randtitle">Languages</h3>
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>React Native</li>
                        <li>C++</li>
                        <li>C</li>
                        <li>Python</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Java</li>
                        <li>SQL</li>
                    </ul>
                </div>
                <div className = "Hobbies"> 
                    <h3 className = "randtitle">Skills</h3>
                        <ul>
                            <li>Cooking</li>
                            <li>Skateboarding</li>
                            <li>Being a good employee</li>
                            <li>Math</li>
                        </ul>
                </div>
            </div>    
        </div>
    </div>
   
    )

}

export default Mainpage;