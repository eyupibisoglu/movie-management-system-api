import { Session } from 'inspector/promises';
import { Document } from 'mongoose';
import { Movie } from 'src/movies/interfaces/movie.interface';
import { User } from 'src/users/interfaces/user.interface';

export interface Ticket extends Document {
  readonly movie: Movie;
readonly session: Session;
readonly user: User;
readonly isWatched: boolean;    
}
