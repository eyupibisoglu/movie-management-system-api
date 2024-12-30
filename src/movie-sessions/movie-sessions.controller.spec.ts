import { Test, TestingModule } from '@nestjs/testing';
import { MovieSessionsController } from './movie-sessions.controller';
import { MovieSessionsService } from './movie-sessions.service';

describe('MovieSessionsController', () => {
  let controller: MovieSessionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovieSessionsController],
      providers: [MovieSessionsService],
    }).compile();

    controller = module.get<MovieSessionsController>(MovieSessionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
