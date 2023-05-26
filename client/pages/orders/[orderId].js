import { useEffect, useState, useRef } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import useRequest from '../../hooks/use-request';
import Router from 'next/router';

export default function OrderShow({ order, currentUser }) {
    const [timeLeft, setTimeLeft] = useState(0);
    const intervalRef = useRef(null);
    const { doRequest, errors } = useRequest({
        url: '/api/payments',
        method: 'post',
        body: {
            orderId: order.id,
        },
        onSuccess: (payment) => Router.push('/orders'),
    });

    useEffect(() => {
        const findTimeLeft = () => {
            const msLeft = new Date(order.expiresAt) - new Date();
            setTimeLeft(Math.round(msLeft / 1000));
        };

        findTimeLeft();
        intervalRef.timerId = setInterval(findTimeLeft, 1000);

        return () => {
            clearInterval(intervalRef.timerId);
        };
    }, []);

    if (timeLeft <= 0) {
        clearInterval(intervalRef.timerId);
        return <div>Order Expired</div>;
    }

    return (
        <div>
            Time left to pay: {timeLeft} seconds
            <StripeCheckout
                token={({ id }) => doRequest({ token: id })}
                stripeKey='pk_test_51MgfyAGAHV1nFYYZhjoELjyo6HcnjGBL21oUxiqwqlvIZoK083QUyArTTXPYoFNiaeppZn4QDvO7028L0VL1yEZq003GRuSHZf'
                amount={order.ticket.price * 100}
                email={currentUser.email}
            />
            {errors}
        </div>
    );
}

OrderShow.getInitialProps = async (context, client) => {
    const { orderId } = context.query;
    const { data } = await client.get(`/api/orders/${orderId}`);

    return { order: data };
};
