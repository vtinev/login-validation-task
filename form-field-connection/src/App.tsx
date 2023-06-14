import React, { useState } from 'react';
import services from "./data/myServices.json";
import Service from './components/Service/Service';

function App() {
  const [inputValues, setInputValues] = useState({});

  const handleInputChange = (fieldId:string, value:string) => {
    setInputValues(prev => ({
      ...prev,
      [fieldId]: value
    }))
  }

  return (
    <div className="App">
      <div className="container">
        {services && services.map((service, index) => (
          <Service 
            key={index + "-service"}
            name={service.name}
            toggle={service.toggle}
            fields={service.fields}
            inputValues={inputValues}
            handleInputChange={handleInputChange}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
