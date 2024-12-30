import { Test, TestingModule } from '@nestjs/testing';
import { MovieSessionsService } from './movie-sessions.service';

describe('MovieSessionsService', () => {
  let service: MovieSessionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovieSessionsService],
    }).compile();

    service = module.get<MovieSessionsService>(MovieSessionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
