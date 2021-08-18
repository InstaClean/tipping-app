import { ButtonGroup } from './ButtonGroup';

export const CalculatorForm = ({
    handleChange,
    bill,
    setBill,
    tip,
    setTip,
    split,
    setSplit,
}) => {
    return (
        <form className="calculator" onChange={handleChange} >
            <p>Bill</p>
            <input  type="number"
                    value={bill}
                    onChange={({target}) => setBill(target.value)}
                    required />
            <p>Select Tip %</p>
            <ButtonGroup
                            tip={tip}
                            setTip={setTip}
                            required />
            <p>Number of People</p>
            <input  type="number"
                    value={split}
                    onChange={({target}) => setSplit(target.value)}
                    required />
        </form>
    )
}