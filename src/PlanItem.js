import React, { useState } from 'react'
import './PlanItem.css'

const PlanItem = ({text, quality}) => {
    const [selected, setSelected] = useState(false)

    return (
        <div className="planItem">
            <div>
                <p>{text}</p>
                <p>{quality}</p>
            </div>
            <button
                onClick={() => setSelected(!selected)} 
                className={selected ? 'planItem__selected' : 'planItem__unselected'}
            >
                {!selected ? 'Subscribe' : 'Current Package'}
            </button>
        </div>
    )
}

export default PlanItem
