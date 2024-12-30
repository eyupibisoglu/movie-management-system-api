import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MovieSessionsService } from './movie-sessions.service';
import { CreateMovieSessionDto } from './dto/create-movie-session.dto';
import { UpdateMovieSessionDto } from './dto/update-movie-session.dto';

@Controller('movie-sessions')
export class MovieSessionsController {
  constructor(private readonly movieSessionsService: MovieSessionsService) {}


}
