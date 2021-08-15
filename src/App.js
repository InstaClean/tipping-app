import './App.css';
import {  useEffect, useState } from 'react';
import { CalculatorForm } from './components/CalculatorForm.js'
import { TotalDisplay } from './components/TotalDisplay'

function App() {

  const [tip, setTip] = useState(0)
  const [bill, setBill] = useState(0)
  const [split, setSplit] = useState(1)
  const [total, setTotal] = useState(0)
  const [tipTotal, setTipTotal] = useState(0)

  const calculateTip = (bill, tip, split) => {
    const tipToPercent = tip / 100;
    const tipPerPerson = (bill * tipToPercent) / split
    const dollars = tipPerPerson.toFixed(2)
    return dollars
  }

  const calculateTotal = (bill, tip, split) => {
    const billParse = parseFloat(bill)
    const tipParse = parseFloat(tip)
    const splitParse = parseFloat(split)

    const tipToPercent = tipParse / 100
    const totalPerPerson = (billParse + (billParse * tipToPercent)) / splitParse
    console.log(billParse)
    const dollars = totalPerPerson.toFixed(2)
    console.log(dollars)
    return dollars
  }

  const handleReset = (e) => {
    e.preventDefault();

    setTip(0);
    setBill(0);
    setSplit(1);

  }
  
  useEffect(() => {
    setTotal(calculateTotal(bill, tip, split))
    setTipTotal(calculateTip(bill, tip, split))
    console.log('effect')
  }, [bill, tip, split])

  return (
    <div className="App">
      <p>Form</p>
      <CalculatorForm   tip={tip}
                        bill={bill}
                        split={split}
                        setTip={setTip}
                        setBill={setBill}
                        setSplit={setSplit}
                     />
      <TotalDisplay     handleReset={handleReset} 
                        total={total}
                        tipTotal={tipTotal}/>    
    </div>
  );
}

export default App;
