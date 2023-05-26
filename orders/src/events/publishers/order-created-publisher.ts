import { Publisher, OrderCreatedEvent, Subjects } from '@hpctickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
