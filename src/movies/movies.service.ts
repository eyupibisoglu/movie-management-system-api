import { Inject, Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './interfaces/movie.interface';
import { Model } from 'mongoose';

@Injectable()
export class MoviesService {
  constructor(@Inject('MOVIE_MODEL') private readonly movieModel: Model<Movie>) {}
    
    create(createMovieDto: CreateMovieDto) {
    const movie = new this.movieModel(createMovieDto);
    return movie.save();
  }

  findAll() {
    return this.movieModel.find();
  }

  async update(id: number, updateMovieDto: UpdateMovieDto) {
    await this.movieModel.findByIdAndUpdate(id, updateMovieDto);
    const movie = await this.movieModel.findById(id); // In order to get updated version of document.
    return movie;
  }

  remove(id: number) {
    return this.movieModel.deleteOne({ _id: id });
  }
}
