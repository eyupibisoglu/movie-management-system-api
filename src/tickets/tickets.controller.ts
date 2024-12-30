import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query, Req } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/common/guards/role.guard';
import { Role } from 'src/users/enums/role.enum';
import { Roles } from 'src/users/decorators/roles.decorator';
import { UpdateTicketWatchedDto } from './dto/update-ticket-watched.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiBody } from '@nestjs/swagger';
import { GetWatchedTicketDto } from './dto/get-watched-movies.dto';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Customer)
  @ApiOperation({ summary: 'Create Ticket' })
  @ApiResponse({ type: CreateTicketDto })
  @ApiBody({ type: CreateTicketDto })
  @Post()
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketsService.create(createTicketDto);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Customer)
  @ApiQuery({ name: 'isWatched', enum: [true, false] })
  @ApiResponse({ type: GetWatchedTicketDto, isArray: true })
  @ApiOperation({ summary: 'List watched movies.' })
  @Get()
  findAll(@Query('isWatched') isWatched, @Req() request: Request) {
    return this.ticketsService.findAll({ isWatched, user: request.user.sub }).populate('movie');
  }

  @ApiBody({ type: UpdateTicketWatchedDto })
  @UseGuards(AuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Watch movie' })
  @ApiResponse({ type: GetWatchedTicketDto, isArray: true })
  @Roles(Role.Customer)
  @Patch(':id/isWatched')
  async updateWatched(@Param('id') id: string, @Body() updateTicketDto: UpdateTicketWatchedDto) {
    return this.ticketsService.updateWatched(id, updateTicketDto);
  }
}
