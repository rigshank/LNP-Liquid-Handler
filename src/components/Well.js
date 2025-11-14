import React, { useState } from 'react';

function Well({ onSelect, state}) {

    if (state === "unSelected") {
        var color = "green"
    }
    if (state === "fromWell") {
        color = "red"
    }
    if (state === "toWell") {
        color = "blue"
    }

    return (
        <div className='well'>
            <button onClick={onSelect} className='well-button' style={{ 'backgroundColor': color }}></button>
        </div>
    )
}

export default Well;