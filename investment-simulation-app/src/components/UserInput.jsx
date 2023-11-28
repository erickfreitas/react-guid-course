export default function UserInput() {
  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label>Investimento Inicial</label>
          <input type='number' id='initial-investment' />
        </p>
        <p>
          <label>Investimento Mensal</label>
          <input type='number' id='initial-investment' />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label>Taxa de Juros</label>
          <input type='number' id='initial-investment' />
        </p>
        <p>
          <label>Período</label>
          <input type='number' id='initial-investment' />
        </p>
      </div>
    </section>
  );
}
