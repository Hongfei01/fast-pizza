import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  const data = useLoaderData();
  return (
    <ul>
      {data.map((item) => (
        <MenuItem pizza={item} key={item.id} />
      ))}
    </ul>
  );
}

export async function loadeMenu() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
