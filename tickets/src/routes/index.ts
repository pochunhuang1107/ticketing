import express, { Request, Response } from 'express';
import { Ticket } from '../models/ticket';

const router = express.Router();

router.get('/api/tickets', async (req: Request, res: Response) => {
    const ticekts = await Ticket.find({
        orderId: undefined,
    });
    res.send(ticekts);
});

export { router as indexTicketRouter };
