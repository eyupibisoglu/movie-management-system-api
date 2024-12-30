import { Inject, Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { Ticket } from './interfaces/ticket.interface';
import { Model } from 'mongoose';
import { UpdateTicketWatchedDto } from './dto/update-ticket-watched.dto';

@Injectable()
export class TicketsService {
    constructor(@Inject('TICKET_MODEL') private readonly ticketModel: Model<Ticket>) { }
    
  create(createTicketDto: CreateTicketDto) {
    const ticket = new this.ticketModel(createTicketDto);
    return ticket.save();
  }

  findAll(condition) {
    return this.ticketModel.find(condition);
  }



  async updateWatched(id: number, updateTicketDto: UpdateTicketWatchedDto) {
      const ticket = await this.ticketModel.findById(id);
      ticket.set('isWatched', updateTicketDto.isWatched);
    return ticket.save();
  }

}
