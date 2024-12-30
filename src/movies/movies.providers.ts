import { Mongoose } from 'mongoose';
import { MovieSchema } from './entities/movie.entity';


export const moviesProviders = [
  {
    provide: 'MOVIE_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Movie', MovieSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
