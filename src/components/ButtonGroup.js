import React from 'react'

export const ButtonGroup = (props) => {
    const { setTip } = props

    return (
        <div className="tip-buttons">
            <input type="button" value='5%'  onClick={({target}) => {setTip(target.value)}} />
            <input type="button" value='10%' onClick={({target}) => {setTip(target.value)}} />
            <input type="button" value='15%'  onClick={({target}) => {setTip(target.value)}} />
            <input type="button" value='20%'  onClick={({target}) => {setTip(target.value)}} />
            <input type="button" value='25%'  onClick={({target}) => {setTip(target.value)}} />
            <input type="text"      id="custom" 
                                    placeholder="Custom"
                                    onChange={({target}) => {setTip(target.value)}} />
        </div>
    )
}