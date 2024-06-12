import { useCallback, useState } from 'react';

const Search = (props) => {
  const { onSearch } = props;
  const [searchText, setSearchText] = useState('');

  const onChange = (event) => {
    setSearchText(event.target.value);
  };

  const search = () => {
    searchText.length && onSearch(searchText.toLowerCase());
  };

  const onSubmit = () => {
    search();
  };

  const onEnter = (event) => {
    event.key === 'Enter' && search();
  };

  return (
    <div className="mx-1">
      <input
        className="border px-1 rounded-s-md shadow-md"
        type="text"
        value={searchText}
        onChange={onChange}
        onKeyDown={onEnter}
      />
      <button
        className="bg-orange-100 px-2 rounded-e-md shadow-md"
        onClick={onSubmit}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
