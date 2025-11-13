import React, { useState } from 'react';

function Well(onSelect) {

    const [wellState, setWellState] = useState("Unselected");

    let selected = wellState === "Selected";

    return (
    <div className='well'>

        <button className='well-button' style={{ 'backgroundColor': selected ? "blue" : "green" }}
                onClick={onSelect}> </button>

    </div>
    )
}

export default Well;