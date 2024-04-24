import { useCallback, useState } from 'react';

const Search = (props) => {
  const { onSearch } = props;
  const [searchText, setSearchText] = useState('');

  const onChange = (event) => {
    setSearchText(event.target.value);
  };

  const search = () => {
    onSearch(searchText.toLowerCase());
  };

  const onSubmit = () => {
    search();
  };

  const onEnter = (event) => {
    event.key === 'Enter' && search();
  };

  return (
    <>
      <input
        className="search-input"
        type="text"
        value={searchText}
        onChange={onChange}
        onKeyDown={onEnter}
      />
      <button className="search-btn" onClick={onSubmit}>
        Search
      </button>
    </>
  );
};

export default Search;
