import { ButtonGroup } from './ButtonGroup';

export const CalculatorForm = ({
    bill,
    setBill,
    tip,
    setTip,
    split,
    setSplit,
    badBill,
    badSplit
}) => {
    return (
        <form className="calculator"  >
            <div className="input-title">
                <p>Bill</p>
                <p className="warning" hidden={!badBill}>Bill must be positive value.</p>
            </div>
            <input  className="bill-input"
                    type="number"
                    step="0.01"
                    value={bill}
                    onChange={({target}) => setBill(target.value)}
                    required />
            <p>Select Tip %</p>
            <ButtonGroup
                            tip={tip}
                            setTip={setTip}
                            required />
            <div className="input-title">
                <p>Number of People</p>
                <p className="warning" hidden={!badSplit} >Split must be whole number &gt; 0.</p>
            </div> 
            <input  className="split-input"
                    type="number"
                    value={split}
                    onChange={({target}) => setSplit(target.value)}
                    required />
        </form>
    )
}