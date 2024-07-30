import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 font-sans uppercase sm:px-6">
      <Link to={'/'} className="tracking-widest">
        Fast pizza
      </Link>
      <SearchInput />
      <Username />
    </header>
  );
}

export default Header;
