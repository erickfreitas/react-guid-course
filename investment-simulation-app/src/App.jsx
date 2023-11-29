import { useState } from 'react';

import Header from './components/Header';
import UserInput from './components/UserInput';
import Result from './components/Result';

const DEFAULT_PARAMETERS = {
  initialInvestment: 1000,
  annualInvestment: 1200,
  expectedReturn: 8,
  duration: 10,
};

function App() {
  const [parameters, setParameters] = useState(DEFAULT_PARAMETERS);

  function handleParamenterChange(parameterName, parameterValue) {
    setParameters((prevParameters) => {
      const updatedParameters = {
        ...parameters,
      };

      updatedParameters[parameterName] = parameterValue;
      return updatedParameters;
    });
  }

  return (
    <>
      <Header />
      <UserInput
        defaultParameters={DEFAULT_PARAMETERS}
        onParameterChange={handleParamenterChange}
      />
      <Result parameters={parameters} />
    </>
  );
}

export default App;
