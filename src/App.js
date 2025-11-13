import React, { useState } from 'react';
import './styles.css';
import MachineCard from './components/MachineCard';
import WellPlate from './components/WellPlate';
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
          <WellPlate name="name" height="8" width="12"></WellPlate>
      </div>
  );
}

export default App;
