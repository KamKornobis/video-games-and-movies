import "./search-box.scss";

export const SearchBox = ({ placeholder, onChangeHandler, className }) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);
