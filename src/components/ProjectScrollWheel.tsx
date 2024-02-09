import ProshowCase from "./ProjectShowCase";
import {useRef, useState, useEffect, useMemo} from 'react';
import './ProjectScrollWheel.css'
import Desmos from './DesmosThumb.png'
import Automata from './AutomataThumb.png'
import Fourier from './FourierThumb.png'
function ProScrolldiv(){
    const start = useRef<null | HTMLDivElement>(null);
    function useIsInViewport(ref: any) {
        const [isIntersecting, setIsIntersecting] = useState(false);
      
        const observer = useMemo(
          () =>
            new IntersectionObserver(([entry]) =>
              setIsIntersecting(entry.isIntersecting),
            ),
          [],
        );
      
        useEffect(() => {
          observer.observe(ref.current);
      
          return () => {
            observer.disconnect();
          };
        }, [ref, observer]);
        return isIntersecting;
    }

    const ref = useRef<null | HTMLDivElement>(null);
    const back = useRef<null | HTMLDivElement>(null);
    const main = useRef<null | HTMLDivElement>(null);
    const isVisible = useIsInViewport(ref);
    const isVisibleBack = useIsInViewport(start);
    const check = useIsInViewport(back);
    const maincheck = useIsInViewport(main);

    console.log(start.current);
    console.log(isVisible);
    if(isVisible == false && start.current != null && isVisibleBack == false && check == false && main.current != null && maincheck){
        start.current.scrollIntoView({inline:'nearest', block: "nearest", behavior: "instant"});
        console.log("help");
    }
    else if(isVisible == false && ref.current != null && isVisibleBack == false && check == true && main.current != null && maincheck){
        ref.current.scrollIntoView({inline:'nearest', block: "nearest", behavior: "instant"});
        console.log("help");
    }

    return (

    <div className = "container" ref = {main}>
        <div className="scrollmenu">
            <div  id = "divFirst"><ProshowCase title = "Drawable Fourier Transform"  summary = "interactive fourier Transform, that turns your drawings or SVG images into a series of rotating circles!" img = {Fourier}></ProshowCase>  </div>
            <div ref = {back}><ProshowCase title = "Photo to Desmos Graph"  summary = "Python script that can take photos, and graph it using mathematical euqations on desmos" img = {Desmos}></ProshowCase></div>
            <div>     <ProshowCase title = "Cellular Automata" summary = "JavaScript object oriented programming which accurately/efficiently simulates a Belousov Zhabotinsky reaction" img = {Automata}></ProshowCase> </div>   

            <div ref = {start}><ProshowCase title = "Drawable Fourier Transform"  summary = "interactive fourier Transform, that turns your drawings or SVG images into a series of rotating circles!" img = {Fourier}></ProshowCase>  </div>
            <div ><ProshowCase title = "Photo to Desmos Graph"  summary = "Python script that can take photos, and graph it using mathematical euqations on desmos" img = {Desmos}></ProshowCase></div>
            <div ref ={ref} id = "startel"> <ProshowCase title = "Cellular Automata" summary = "JavaScript object oriented programming which accurately/efficiently simulates a Belousov Zhabotinsky reaction" img = {Automata}></ProshowCase></div>

            <div  id = "divFirst"><ProshowCase title = "Drawable Fourier Transform"  summary = "interactive fourier Transform, that turns your drawings or SVG images into a series of rotating circles!" img = {Fourier}></ProshowCase>  </div>
            <div><ProshowCase title = "Photo to Desmos Graph"  summary = "Python script that can take photos, and graph it using mathematical euqations on desmos" img = {Desmos}></ProshowCase></div>
            <div>      <ProshowCase title = "Cellular Automata" summary = "JavaScript object oriented programming which accurately/efficiently simulates a Belousov Zhabotinsky reaction" img = {Automata}></ProshowCase></div>           
        </div>
    </div>)
} 

export default ProScrolldiv;
