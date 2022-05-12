
import "./App.css"
import Trivia from "./components/Trivia"
import Timer from  "./components/Timer"
import {data} from "./components/data"
import {useState , useEffect} from "react"

function App() {

  const [questionNumber , setQuestionNumber] = useState(1);
  const [Stop , setStop] = useState(false);
  const [earned , setEarned] = useState("AMD 0")


 const moneyPyramid = [
   
  {id : 1 , amount: "AMD 1 000"},
  {id : 2 , amount: "AMD 2 000"},
  {id : 3 , amount: "AMD 5 000"},
  {id : 4 , amount: "AMD 10 000"},
  {id : 5 , amount: "AMD 20 000"},
  {id : 6 , amount: "AMD 50 000"},
  {id : 7 , amount: "AMD 100 000"},
  {id : 8 , amount: "AMD 200 000"},
  {id : 9 , amount: "AMD 300 000"},
  {id : 10 , amount: "AMD 400 000"},
  {id : 11 , amount: "AMD 500 000"},
  {id : 12 , amount: "AMD 600 000"},
  {id : 13 , amount: "AMD 700 000"},
  {id : 14 , amount: "AMD 800 000"},
  {id : 15 , amount: "AMD 1 000 000"},
  
 ].reverse();

 useEffect(() => {
   questionNumber > 1 && 
       setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1 ).amount);
 } , [moneyPyramid , questionNumber])

  return (
    <div className="app">
    
       <div className="main">
          { Stop ? (<h1 className = "endText">ԴՈՒՔ ՈՒՆԵՔ: {earned} </h1>) : (
          
        <>
         <div className="top">
           <div className="timer">
            <Timer setStop={setStop} questionNumber={questionNumber} />
           </div>
         </div>
         <div className="bottom">
           <Trivia  
           data={data} 
           setStop={setStop} 
           questionNumber = {questionNumber}
           setQuestionNumber={setQuestionNumber}  
           />
         </div>  
         </> 
          )}  
       </div>
       <div className="pyramid">
         <ul className="moneyList">
           { moneyPyramid.map((m) => (

          <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
            <span className="moneyListItemNumber">{m.id}</span>
            <span className="moneyListItemAmount">{m.amount}</span>
          </li>

           )) }
         </ul>
       </div>
    </div>
  );
}

export default App;
