import React, { useState } from 'react';
import Well from './Well';

function WellPlate({ name, width, height, disabled }) {

    const handleClick = (i, j) => {
        
    }

    var wells = [];

    for (let i = 0; i < height; i++) { 

        for (let j = 0; j < width; j++) {

            wells.push(<Well onSelect={() => handleClick(i, j)} ></Well>);

            if (j == width - 1) {
                wells.push(<br className="clear"/>);
            }
        }
    }

    return (
        <div className='well-plate'>

        {disabled === "Selected" ? (<div><h3>{name}</h3> { wells}</div>) : null }
    </div>
    )
}

export default WellPlate;