import { useState } from 'react';

export default function UserInput({ defaultParameters, onParameterChange }) {
  const [parameters, setParameters] = useState(defaultParameters);

  function handleParameterChange(propertyName, event) {
    const propertyValue = Number(event.target.value);

    setParameters(() => {
      const updatedParameters = {
        ...parameters,
      };
      updatedParameters[propertyName] = propertyValue;
      return updatedParameters;
    });

    onParameterChange(propertyName, propertyValue);
  }

  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label>Investimento Inicial</label>
          <input
            type='number'
            id='initial-investment'
            value={parameters.initialInvestment}
            onChange={(event) =>
              handleParameterChange('initialInvestment', event)
            }
          />
        </p>
        <p>
          <label>Investimento Anual</label>
          <input
            type='number'
            id='monthly-investment'
            value={parameters.annualInvestment}
            onChange={(event) =>
              handleParameterChange('annualInvestment', event)
            }
          />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label>Taxa de Juros</label>
          <input
            type='number'
            id='interest'
            value={parameters.expectedReturn}
            onChange={(event) => handleParameterChange('expectedReturn', event)}
          />
        </p>
        <p>
          <label>Período</label>
          <input
            type='number'
            id='period'
            value={parameters.duration}
            onChange={(event) => handleParameterChange('duration', event)}
          />
        </p>
      </div>
    </section>
  );
}
