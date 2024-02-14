export const Button = ({ identifier, value, handleClick }) => {
  return (
    <button name={identifier} value={value} onClick={() => handleClick(value)}>
      {identifier.toUpperCase()}
    </button>
  );
};
