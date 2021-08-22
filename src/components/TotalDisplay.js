import React from 'react'

export const TotalDisplay = ({
    handleReset,
    total,
    tipTotal
}) => {
    return (
        <div className="display">
            <div className="total">
                <div className="info">
                    <p className="primary">Tip Amount</p>
                    <p className="secondary">/ Person</p>
                </div>
                <p className="cost">{tipTotal}</p> 
            </div>
            <div className="total">
                <div className="info">
                    <p className="primary">Total</p>
                    <p className="secondary">/ Person</p>
                </div>
                <p className="cost">{total}</p>
            </div>

            <input type="button" value="RESET" onClick={handleReset} />
        </div>
    )
}