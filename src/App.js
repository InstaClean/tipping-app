import './App.css';
import {  useEffect, useState } from 'react';
import { CalculatorForm } from './components/CalculatorForm.js'
import { TotalDisplay } from './components/TotalDisplay'

function App() {

  //state
  const [tip, setTip] = useState(0)
  const [bill, setBill] = useState(0)
  const [split, setSplit] = useState(1)
  const [total, setTotal] = useState(0)
  const [tipTotal, setTipTotal] = useState(0)
  const [badBill, setBadBill] = useState(false)
  const [badSplit, setBadSplit] = useState(false)

  //calculates tip per person
  const calculateTip = (bill, tip, split) => {
    const billParse = parseFloat(bill)
    const tipParse = parseFloat(tip)
    const splitParse = parseFloat(split)
    const tipPercent = tipParse / 100;
    const tipPerPerson = (billParse * tipPercent) / splitParse
    const dollars = tipPerPerson.toFixed(2)
    return dollars
  }

  //calculates total per person
  const calculateTotal = (bill, tip, split) => {
    const billParse = parseFloat(bill)
    const tipParse = parseFloat(tip)
    const splitParse = parseFloat(split)
    const tipPercent = tipParse / 100;
    const totalPerPerson = (billParse + (billParse * tipPercent)) / splitParse
    const dollars = totalPerPerson.toFixed(2)
    return dollars
  }


  //resets inputs
  const handleReset = (e) => {
    e.preventDefault();

    setTip(0);
    setBill(0);
    setSplit(1);

  }

  // tip and total update
  //renders bill and split warnings
  useEffect(() => {
    setTotal(calculateTotal(bill, tip, split))
    setTipTotal(calculateTip(bill, tip, split))
    
    if (bill < 0 || isNaN(bill)) {
      setBadBill(true)
    }

    if (bill > 0) {
      setBadBill(false)
    }

    if (split < 1 || split % 1 === 0){
      setBadSplit(true)
    }

    if (split >= 1) {
      setBadSplit(false)
    }
  }, [bill, tip, split])

  useEffect(() => {
    if (total < 0 || isNaN(total) || !isFinite(total)) {
      setTotal(0)
      setTipTotal(0)
    }
  }, [total, tipTotal])

  return (
    <div className="App">
      <h1>S P L I T T E R</h1>
      <div className="container" >
        <CalculatorForm   
                          tip={tip}
                          bill={bill}
                          split={split}
                          setTip={setTip}
                          setBill={setBill}
                          setSplit={setSplit}
                          badBill={badBill}
                          badSplit={badSplit}/>
        <TotalDisplay    
                          handleReset={handleReset} 
                          total={total}
                          tipTotal={tipTotal}/>
      </div>    
    </div>
  );
}

export default App;
