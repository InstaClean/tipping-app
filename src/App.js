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
    const tipPerPerson = (bill * tip) / split
    const dollars = tipPerPerson.toFixed(2)
    return dollars
  }

  const calculateTotal = (bill, tip, split) => {
    const total = (bill + (bill * tip)) / split
    const dollars = total.toFixed(2)
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
