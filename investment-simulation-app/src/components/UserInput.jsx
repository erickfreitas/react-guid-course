import { formatter } from '../util/investment';

export default function UserInput({ parameters, onParameterChange }) {
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
              onParameterChange('initialInvestment', event.target.value)
            }
          />
        </p>
        <p>
          <label>Investimento Anual</label>
          <input
            type='number'
            id='monthly-investment'
            className='input-with-select'
            value={parameters.annualInvestment}
            onChange={(event) =>
              onParameterChange('annualInvestment', event.target.value)
            }
          />
          <select className='input-with-select'>
            <option>Mensal</option>
            <option>Anual</option>
          </select>
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label>Taxa de Juros</label>
          <input
            type='number'
            id='interest'
            className='input-with-select'
            value={parameters.expectedReturn}
            onChange={(event) =>
              onParameterChange('expectedReturn', event.target.value)
            }
          />
          <select className='input-with-select'>
            <option>Mensal</option>
            <option>Anual</option>
          </select>
        </p>
        <p>
          <label>Período</label>
          <input
            type='number'
            id='period'
            value={parameters.duration}
            onChange={(event) =>
              onParameterChange('duration', event.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
}
