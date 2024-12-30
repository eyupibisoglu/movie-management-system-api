import { Mongoose } from 'mongoose';
import { TicketSchema } from './entities/ticket.entity';


export const ticketsProviders = [
  {
    provide: 'TICKET_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Ticket', TicketSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
