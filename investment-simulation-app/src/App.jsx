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

  const inputIsValid = parameters.duration > 0;

  function handleParamenterChange(parameterName, parameterValue) {
    setParameters((prevParameters) => {
      const updatedParameters = {
        ...parameters,
      };

      let value = Number(
        parameterValue.replace('R$ ', '').replace('.', '').replace(',', '')
      );

      updatedParameters[parameterName] = value;
      return updatedParameters;
    });
  }

  return (
    <>
      <Header />
      <UserInput
        parameters={parameters}
        onParameterChange={handleParamenterChange}
      />
      {!inputIsValid && (
        <p className='center'>O campo duração deve ser maior que 0.</p>
      )}
      {inputIsValid && <Result parameters={parameters} />}
    </>
  );
}

export default App;
