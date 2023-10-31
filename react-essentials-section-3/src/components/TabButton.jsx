export default function TabButton(props) {
  return (
    <li>
      <button
        className={props.isSelected ? 'active' : ''}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </li>
  );
}
