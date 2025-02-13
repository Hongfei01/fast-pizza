import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalPrice, getTotalQuaitity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalQuaitity);
  const totalCartPrice = useSelector(getTotalPrice);
  if (!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm text-stone-200 sm:px-6 md:text-base">
      <p className="sm:sapce-x-6 space-x-4 uppercase text-stone-300">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to={'/cart'} className="uppercase">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
