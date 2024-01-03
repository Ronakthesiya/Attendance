import "./App.css"
import React,{useState} from 'react'
import useClipboard from "react-use-clipboard";

const App = () => {
    const [textToCopy, setTextToCopy] = useState();
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration:1000
    });
    const [start,setStart] = useState();
    const [end,setEnd]=useState();
    const [curr,setCurr]=useState()
    const [abs,setAbs]=useState();

    function stop(){
        if(parseInt(curr)>parseInt(end)){
            alert("absent number is : "+abs);
            setStart('');
            setCurr('');
            setEnd('');
        }
    }

    function absent(){
        if(abs===undefined || abs===null){
            setAbs(curr);
        }else{
            setAbs(abs+', '+curr);
        }
    }
    
    return (
        <>
        <div id="header"><h1>Attendance</h1></div>
        <div className="container">
            <div>
                <div>
                    <input type="Number" value={start} placeholder="Start" onChange={(e)=>(setStart(e.target.value),setCurr(e.target.value))}></input>
                    <input type="Number" value={end} placeholder="End" onChange={(e)=>setEnd(e.target.value)}></input>
                </div>
                <div id="curr">
                    <div id="input">
                        {curr}
                    </div>
                </div>
                <div id="but">
                    <button id="one" onClick={()=>setCurr(parseInt(curr)-1)}>Back</button>
                    <button id="two" onClick={()=>(absent(),setCurr(parseInt(curr)+1),stop(),setTextToCopy(abs))}>Absent</button>
                    <button id="three" onClick={()=>(setCurr(parseInt(curr)+1),stop(),setTextToCopy(abs))}>Present</button>
                </div>
            </div>
        </div>
        <div id="la">
            <div id="ab">
                {abs}
            </div>
        </div>
        <div id="but">
            <button onClick={setCopied}>
                {isCopied ? 'Copied!' : 'Copy'}
            </button>
            <button onClick={()=>setAbs(null)}>Clear</button>
        </div>
        </>
    );
};

export default App;