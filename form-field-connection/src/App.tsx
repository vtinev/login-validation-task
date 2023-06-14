import React, { useState } from 'react';
import services from "./data/myServices.json";
import Service from './components/Service/Service';

function App() {
  return (
    <div className="App">
      <div className="container">
        {services && services.map((service, index) => (
          <Service 
            key={index + "-service"}
            name={service.name}
            toggle={service.toggle}
            fields={service.fields}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
