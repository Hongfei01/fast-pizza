import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';

function Header() {
  return (
    <header>
      <Link to={'/'}>Fast pizza</Link>
      <SearchInput />
    </header>
  );
}

export default Header;
