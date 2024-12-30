import * as mongoose from 'mongoose';
import { MovieSchema } from 'src/movies/entities/movie.entity';


export const MovieSessionSchema = new mongoose.Schema({
    movie: MovieSchema,
    timeSlot: Number,
    room: String,
    date: Number, // In order to assign easy index, set as unix timestamp.
});

