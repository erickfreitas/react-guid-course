import logo from '../assets/investment-calculator-logo.png';

export default function Header() {
  return (
    <div id='header'>
      <img src={logo} alt='logo' />
      <h1>Calculadora de Juros Compontos</h1>
    </div>
  );
}
