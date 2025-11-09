import React, { useState } from 'react';

function Well() {

    const [wellState, setWellState] = useState("Unselected");

    const selectWell = () => { }

    return (
    <div className='well'>

        <button className='well-button' onclick='selectWell'> </button>

    </div>
    )
}

export default Well;