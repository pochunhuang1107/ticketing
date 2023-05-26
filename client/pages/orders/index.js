import { useEffect, useState } from 'react';
import Link from 'next/link';
import moment from 'moment';

export default function OrderIndex({ orders }) {
    const [dates, setDates] = useState({});

    useEffect(() => {
        const newDates = {};
        for (const order of orders) {
            newDates[order.id] = moment(order.expiresAt).format(
                'MMM DD, YYYY HH:mm:ss'
            );
        }
        setDates(newDates);
    }, []);

    const sortedOrders = [...orders].sort((a, b) => {
        const dateA = new Date(a.expiresAt);
        const dateB = new Date(b.expiresAt);
        return dateB - dateA; // For descending order
    });

    const renderedOrders = sortedOrders.map((order) => {
        return (
            <tr key={order.id}>
                <td>{order.ticket.title}</td>
                <td>${order.ticket.price}</td>
                <td>{order.status}</td>
                <td>{dates[order.id] || 'Loading...'}</td>
                <td>
                    {order.status === 'created' ? (
                        <Link href={`/tickets/${order.ticket.id}`}>
                            Payment
                        </Link>
                    ) : (
                        '-'
                    )}
                </td>
            </tr>
        );
    });

    return (
        <table className='table text-center'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>{renderedOrders}</tbody>
        </table>
    );
}

OrderIndex.getInitialProps = async (context, client) => {
    const { data } = await client.get('/api/orders');

    return { orders: data };
};
