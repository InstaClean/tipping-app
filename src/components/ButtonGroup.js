import React from 'react'

export const ButtonGroup = (props) => {
    const { tip, setTip } = props

    return (
        <div className="tip-buttons">
            <input type="button" value={0} onClick={({target}) => {setTip(target.value)}} />
            <input type="button" value={.1} onClick={({target}) => {setTip(target.value)}} />
            <input type="button" value={.15} onClick={({target}) => {setTip(target.value)}} />
            <input type="button" value={.20} onClick={({target}) => {setTip(target.value)}} />
            <input type="button" value={.25} onClick={({target}) => {setTip(target.value)}} />
            <input type="number" value={tip} onChange={({target}) => {setTip(target.value)}} />
        </div>
    )
}