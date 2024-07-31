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
        className="rounded-full bg-yellow-100 px-4 py-2 text-sm transition duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
        placeholder="Search #"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
    </form>
  );
}

export default SearchInput;
