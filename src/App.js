import React, { useState } from 'react';
import './styles.css';
import MachineCard from './components/MachineCard';
import prototype1 from './images/prototype1testimage.jpg';

function App() {

  const [machineAvailability, setMachineAvailability] = useState("Available");

  const selectMachine = () => {
    setMachineAvailability("Unavailable");
  }

  return (
    <div>
      <h1>LNP Automatic Pipetting System</h1>
      <p>Please select an available machine.</p>
      <MachineCard
        name="Prototype 1"
        image={prototype1}
        status={machineAvailability}
        onSelect={selectMachine}
      />
    </div>
  );
}

export default App;
