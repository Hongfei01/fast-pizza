import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm text-stone-200 sm:px-6 md:text-base">
      <p className="sm:sapce-x-6 space-x-4 uppercase text-stone-300">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to={'/cart'} className="uppercase">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
