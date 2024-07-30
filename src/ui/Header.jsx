import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';

function Header() {
  return (
    <header className="bg-yellow-500">
      <Link to={'/'}>Fast pizza</Link>
      <SearchInput />
      <p>Jonas</p>
    </header>
  );
}

export default Header;
