import {
    Subjects,
    Publisher,
    ExpirationCompleteEvent,
} from '@hpctickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
