import React from 'react';

function MachineCard({name, image, status, onSelect}) {
    const isAvailable = status === 'Available';
    
    return (
    <div className='card'>
        <h3>{name}</h3>
        <p>
            Status: 
            <span style={{ color: isAvailable ? 'green' : "red"}}>
                {status}
            </span>
        </p>
        <img 
            src={image} 
            alt="First"
            className='card-image'
        />
        <br/>
        <button onClick={onSelect} disabled={!isAvailable}>
            {isAvailable ? "Select" : "Selected"}
        </button>
    </div>
)
}

export default MachineCard;