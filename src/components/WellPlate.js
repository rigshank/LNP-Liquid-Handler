import React, { useState } from 'react';
import Well from './Well';

function WellPlate({name, width, height }) {

    let wells = [];

    for (let i = 0; i < height; i++) { 

        for (let j = 0; j < width; j++) {

            wells.push(<Well></Well>);

            if (j == width - 1) {
                wells.push(<br className="clear"/>);
            }
        }
    }

    return (
    <div className='well-plate'>

        <h3>{name}</h3>

        {wells}

    </div>
    )
}

export default WellPlate;