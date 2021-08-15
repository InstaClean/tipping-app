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
            <input  type="bill"
                    value={bill}
                    onChange={({target}) => setBill(target.value)}
                    required />
            <ButtonGroup    type="tip"
                            tip={tip}
                            setTip={setTip}
                            required />
            <input  type="split"
                    value={split}
                    onChange={({target}) => setSplit(target.value)}
                    required />
        </form>
    )
}