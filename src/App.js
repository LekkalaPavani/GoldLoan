import React,{useState} from 'react';
import './App.css';

function App() {
  const [weight,setWeight]=useState(0);
  const [purity,setPurity]=useState(91.6);
  const [goldprice,setPrice]=useState(6000);
  const [LTVratio,setLTVRatio]=useState(75);
  const [Loanamount,setLoanAmount]=useState(null);

  const CaluculateLoanAmount=()=>{
    const puritydec=purity/100;
    const valueofGold=weight*puritydec*goldprice;
    const Loan=valueofGold*(LTVratio/100);
    return setLoanAmount(Loan);

  }

  return (
    <div className="container">
      <h1>Gold Loan Application</h1>
      <div>
        <label>weight of gold(in gms) : </label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)}/>
        </div>
        <div>
        <label>Gold purity : </label>
        <input type="number" value={purity} onChange={(e) => setPurity(e.target.value)}/>
        </div>
        <div>
        <label>Gold price per gram : </label>
        <input type="number" value={goldprice} onChange={(e) => setPrice(e.target.value)}/>
        </div>
        <div>
        <label>LTVRation in % : </label>
        <input type="number" value={LTVratio} onChange={(e) => setLTVRatio(e.target.value)}/>
        </div>
        
        
      

      <button onClick={CaluculateLoanAmount}>Calculate Loan Amount : {Loanamount}</button>
            
    </div>
         
  );
}

export default App;
