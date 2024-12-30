import { Document } from 'mongoose';
import { Movie } from 'src/movies/interfaces/movie.interface';

export interface MovieSession extends Document {
  readonly movie: Movie;
    readonly timeSlot: number;
    readonly room: string;
    readonly date: number;
}

