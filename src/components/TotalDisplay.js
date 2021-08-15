import React from 'react'

export const TotalDisplay = ({
    handleReset,
    total,
    tipTotal
}) => {
    return (
        <div className="display">
            <p>Total: {total}</p>
            <p>Tip: {tipTotal}</p>
            <input type="button" onClick={handleReset} />
        </div>
    )
}