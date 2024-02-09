import './Article.css'
function Article(props: {title: string, date: string, article: string}){
    return(
        <>
        <h1 className = "title">{props.title}</h1>
        <div className = "body">
            <h4 className = "date">{props.date}</h4>
            <p className = "mainBody">
                Today, I will be talking about my survival chances and techniques, when paired against different bears.
                <br /> 
                <br />
                Starting off with the most commonly talked about bear. We have the grizzly bear. Now personally I have no experience with grizzly bears
                but I do know alot about them. They like to hibernate, eat salmon and they're big/strong. While I am neither big or strong, I do eat salmon and take naps, ergo I am around 2/3 akin to a bear.
                <br /> 
                <br />
                The thing about grizzly bears, is that before they hibernate they eat extra to store energy as fat. This is when I will strike my attack...
                <br /> 
                When bears get fat, they also get round, making them easily vulnerable to pushing attacks. Therefor my plan of attack is to simply approach the bear from the side and push it so that it rolls away from me (possibly off a cliff).
                <br /> 
                <br />
                Polarbears are a different story. These bears are almost twice as big as a grizzly bear and unfortuantly do not hibernate like their counterparts. As a result, I would get brutally mauled by a polar bear.


                <br /> 
                <br />
                Thank you for reading my first ever blog, I sincerely hope you are not my future employer.
                <br/>
                <br/>
                and if you are, this was just a test article. I am an extremly capable employee and will fight off any polarbears if the company requires me to.
                <br/>
                <br/>
                I am extemely hard working and dedicated to your company.
                <br/>
                <br/>
                
            </p>
            <p className = "signoff"> Sincerely, <br/> Albert Yang</p>
        </div>
        
        </>
    )
}

export default Article;