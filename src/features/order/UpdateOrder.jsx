import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type={'primary'}>Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export const action = async ({ request, params }) => {
  const orderId = params.orderId;

  await updateOrder(orderId, { priority: true });
  return null;
};
