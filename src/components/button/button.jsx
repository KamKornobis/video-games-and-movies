import './button.scss'

export const Button = ({ name, onClick, buttonType }) => {
  return <button className={`button-container ${buttonType}`} onClick={onClick}>{name}</button>;
};
