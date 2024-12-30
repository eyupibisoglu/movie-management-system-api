import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieSessionDto } from './create-movie-session.dto';

export class UpdateMovieSessionDto extends PartialType(CreateMovieSessionDto) {}
