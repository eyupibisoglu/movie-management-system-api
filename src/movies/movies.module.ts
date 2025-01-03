import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { DatabaseModule } from 'src/database/database.module';
import { moviesProviders } from './movies.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [MoviesController],
  providers: [MoviesService, ...moviesProviders],
})
export class MoviesModule {}
