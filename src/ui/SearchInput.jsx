import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchInput() {
  const navigate = useNavigate();
  const [query, setQuery] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='Search #'
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchInput;
