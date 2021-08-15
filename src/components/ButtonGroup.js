import React from 'react'

export const ButtonGroup = (props) => {
    const { tip, setTip } = props

    return (
        <div className="tip-buttons">
            <input type="radio" value={0} onClick={({target}) => {setTip(target.value)}} />
            <input type="radio" value={.1} onClick={({target}) => {setTip(target.value)}} />
            <input type="radio" value={.15} onClick={({target}) => {setTip(target.value)}} />
            <input type="radio" value={.2} onClick={({target}) => {setTip(target.value)}} />
            <input type="radio" value={.25} onClick={({target}) => {setTip(target.value)}} />
            <input type="number" value={tip} onChange={({target}) => {setTip(target.value)}} />
        </div>
    )
}