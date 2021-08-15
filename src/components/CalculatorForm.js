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
        <form onChange={handleChange} >
            <p>bill</p>
            <input  type="number"
                    value={bill}
                    onChange={({target}) => setBill(target.value)}
                    required />
            <p>tip%</p>
            <ButtonGroup
                            tip={tip}
                            setTip={setTip}
                            required />
            <p>People Splitting</p>
            <input  type="number"
                    value={split}
                    onChange={({target}) => setSplit(target.value)}
                    required />
        </form>
    )
}