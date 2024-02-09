import './ProjectShowCase.css'
function ProshowCase(props: {title: string,  summary: string, img: string } ){
    return (
        <div className ="help">
            <div className = "projectModule" id = "what">
                <div className= "Description">
                    <p className = "projectdesc">Project</p>
                    <h1 className = "ProshowTitle" style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>{props.title}</h1>
                
                    <p className = "ProshowSum" style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>{props.summary}</p>
                    <a className = "contLink kub">Continue <i className="arrow right"></i></a>
                </div>
                <img className = "Thumbnail" src={props.img}></img>
            </div>
        </div>
        
    )
}
export default ProshowCase;