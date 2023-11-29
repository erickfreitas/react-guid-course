import { calculateInvestmentResults, formatter } from '../util/investment';
export default function Result({ parameters }) {
  const results = calculateInvestmentResults(parameters);
  const initialInvestiment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

  return (
    <table id='result'>
      <thead>
        <tr>
          <th>Ano</th>
          <th>Valor investido</th>
          <th>Juros (anual)</th>
          <th>Juros total</th>
          <th>Capital investido</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => {
          const totalInterest =
            result.valueEndOfYear -
            initialInvestiment -
            result.annualInvestment * result.year;

          const investedCapital = result.valueEndOfYear - totalInterest;

          return (
            <tr key={result.year}>
              <td className='center'>{result.year}</td>
              <td className='center'>
                {formatter.format(result.valueEndOfYear)}
              </td>
              <td className='center'>{formatter.format(result.interest)}</td>
              <td className='center'>{formatter.format(totalInterest)}</td>
              <td className='center'>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
