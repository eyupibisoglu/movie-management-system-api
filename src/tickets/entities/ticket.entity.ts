import * as mongoose from 'mongoose';
import { Types } from 'mongoose';
import { MovieSessionSchema } from 'src/movie-sessions/entities/movie-session.entity';
import { MovieSchema } from 'src/movies/entities/movie.entity';

export const TicketSchema = new mongoose.Schema({
    movie: { type: Types.ObjectId, ref: 'Movie' },
    session: { type: Types.ObjectId, ref: 'Session' },
    user: { type: Types.ObjectId, ref: 'User' },
    isWatched: Boolean,
});

