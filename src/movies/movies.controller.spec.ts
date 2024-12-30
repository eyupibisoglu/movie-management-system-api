import { Test, TestingModule } from '@nestjs/testing';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { Movie } from './interfaces/movie.interface';

describe('MoviesController', () => {
  let controller: MoviesController;
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoviesController],
      providers: [MoviesService],
    }).compile();

    controller = module.get<MoviesController>(MoviesController);
    service = module.get(MoviesService);
  });

  describe('findAll', () => {
    it('should be defined', () => {
      expect(service).toBeDefined();
    });
  });
});
